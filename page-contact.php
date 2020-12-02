<?php /* Template Name: Contact Page */ ?>

<?php get_header();  ?>


<div class="main">
  <div class="container">
	<?php // Start the loop ?>
      <?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

		<h2 class="contact-title">Contact Us</h2>
        <?php the_content(); ?>

	<div class="contact-boxes">
		<div class="contact-box email">
			<i class="fa fa-envelope-o" aria-hidden="true"></i>
	      	<a href="mailto:<?php the_field('email', 'option'); ?>"><?php the_field('email', 'option'); ?></a>
    	</div>
    	<div class="contact-box address">
    		<i class="fa fa-home" aria-hidden="true"></i>
    		<a href="#map">P.O. Box 444<br>Pickering, ON<br>L1V 2R6</a>
    	</div>
    	<div class="contact-box phone">
    		<i class="fa fa-phone" aria-hidden="true"></i>
	     	<a href="tel:<?php the_field('phone_number_', 'option'); ?>"><?php the_field('phone_number_', 'option'); ?></a>
    	</div>
	</div>

	<div class="contact-form-area">
		<div class="contact-form">
			<h2>Send Us a Message</h2>
		 	<?php echo do_shortcode('[gravityform id="4" title="false" description="false"]'); ?>
		</div>
	</div>

	<div id="map"></div>
		<div class="map">
	    	<?php echo do_shortcode("[wpgmza id='1']"); ?>
		</div>



		<div class="contact-numbers">
			<h2>Get in touch with our Team</h2>
			<div class="each-person">
				<p class="position">President</p>
				<p class="name">Pascal Arpin</p>
				<p class="phone-number">416-275-2048</p>
			</div>
			<div class="each-person">
				<p class="position">Vice-President</p>
				<p class="name">Alan McDermott</p>
				<p class="phone-number">647-823-2413</p>
			</div>
			<div class="each-person">
				<p class="position">Treasurer</p>
				<p class="name">Dave McCarroll</p>
				<p class="phone-number">905-831-0298</p>
			</div>
			<div class="each-person">
				<p class="position">Secretary</p>
				<p class="name">Anzalene Rayman </p>
				<p class="phone-number">647-692-7697</p>
			</div>
			<div class="each-person">
				<p class="position">Membership Director</p>
				<p class="name">Rika Jacoby</p>
				<p class="phone-number">905-420-0147</p>
			</div>
			<div class="each-person">
				<p class="position">Court Maintenance</p>
				<p class="name">Mark van Rooy </p>
				<p class="phone-number"> 416-570-6358</p>
			</div>
			<div class="each-person">
				<p class="position">Junior Development</p>
				<p class="name">Peter Miles</p>
				<p class="phone-number">416-453-5586</p>
			</div>
			<div class="each-person">
				<p class="position">Tournament Director</p>
				<p class="name">Colleen Miles</p>
				<p class="phone-number">416-409-5724</p>
			</div>
			<div class="each-person">
				<p class="position">Social Director</p>
				<p class="name">Nancy Van Rooy</p>
				<p class="phone-number">905-831-3320</p>
			</div>
			<div class="each-person">
				<p class="position">Past President</p>
				<p class="name">Martin Croteau</p>
				<p class="phone-number">905-831-4617</p>
			</div>
			<div class="each-person">
				<p class="position">Club Professional</p>
				<p class="name">Brian Hurd</p>
				<p class="phone-number">905-706-6667</p>
			</div>
		</div>
	



      <?php endwhile; // end the loop?>

  </div> <!-- /.container -->
</div> <!-- /.main -->

<?php get_footer(); ?>