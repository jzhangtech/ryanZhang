<?php 
/*******************************************************************
 *  Template Name: NSS Posts
 *******************************************************************/

header ("Content-Type:text/xml"); 
echo "<?xml version='1.0' ?>\n";

$args = array('posts_per_page' => 3);
$myposts = get_posts( $args );

function get_avatar_url($id){
    preg_match("/src='(.*?)'/i", get_avatar($id), $matches);
    return $matches[1];
}

?>
<nss>
<?php
foreach ( $myposts as $post ) : setup_postdata( $post ); ?>
	<item>
		<channel>custom</channel>
		<id><?php the_ID(); ?></id>
		<created><?php echo get_the_date('c'); ?></created>
		<content><![CDATA[<?php echo strip_tags(get_the_excerpt()); ?>]]></content>
		<author>
			<id><?php echo get_the_author_meta('ID'); ?></id>
			<name><![CDATA[<?php the_author(); ?>]]></name>
			<link><![CDATA[<?php the_permalink(); ?>]]></link>
			<avatar><![CDATA[<?php echo get_avatar_url(get_the_author_meta('ID')); ?>]]></avatar>
		</author>

	</item>
<?php endforeach; wp_reset_postdata(); ?>
</nss>