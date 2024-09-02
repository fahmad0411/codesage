<?php
include "includes/header.php";
?>


<!--==================================================-->
	<!-----Start Appoinment Section ----->
	<!--===================================================-->

	<div class="contact-us pt-90 pb-90">
		<div class="container">
			<div class="row">
				<div class="col-sm-12 col-md-6 col-lg-6 pl-0 pr-0">
					<div class="contact_from_box">
						<div class="contact_title pb-4">
							<h3>Get In Touch</h3>
						</div>
						<form id="contact_form" action="" method="POST" >
							<div class="row">
								<div class="col-lg-6">
									<div class="form_box mb-30">
										<input type="text" name="name"  placeholder="Name">
									</div>
								</div>
								<div class="col-lg-6">
									<div class="form_box mb-30">
										<input type="email" name="email" placeholder="Email Address">
									</div>
								</div>
								<div class="col-lg-6">
									<div class="form_box mb-30">
										<input type="text" name="phone" placeholder="Phone Number">
									</div>
								</div>
								<div class="col-lg-6">
									<div class="form_box mb-30">
										<input type="text" name="web" placeholder="Website">
									</div>
								</div>
								
								<div class="col-lg-12">
									<div class="form_box mb-30">
										<textarea name="message" id="message" cols="30" rows="10" placeholder="Your Message"></textarea>
									</div>
									<div class="quote_btn">
										<button class="btn" type="submit">Send Message</button>
									</div>
								</div>
							</div>
						</form>
						<p class="form-message"></p>
					</div>
				</div>
				<div class="col-sm-12 col-md-6 col-lg-6 pl-0 pr-0">
					<div class="cda-content-area">
						<div class="cda-single-content d-flex">
							<div class="cda-icon">
								<i class="flaticon-time"></i>
							</div>
							<div class="cda-content-inner">
								<h4>Company Location</h4>
								<p>Mississauga ON, Ontario</p>
							</div>
						</div>
						<div class="cda-single-content hr d-flex">
							<div class="cda-icon">
								<i class="flaticon-call"></i>
							</div>
							<div class="cda-content-inner">
								<h4>Phone Number</h4>
								<p>+92 322 408 1157,  <br>+1 437 262 3308, </p>
							</div>
						</div>
						<div class="cda-single-content hr d-flex">
							<div class="cda-icon">
								<i class="flaticon-next-1"></i>
							</div>
							<div class="cda-content-inner">
								<h4>Our Email Address</h4>
								<p>support@codesage.ca <br>dummy@gmail.com</p>
							</div>
						</div>
						<div class="cda-single-content hr d-flex">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!--==================================================-->
	<!-----Start Contact Location Section ----->
	<!--===================================================-->	
	<div class="map-section">
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-12 p-0">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184985.77678765866!2d-79.49434774999999!3d43.57732645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b469fe76b05b7%3A0x3146cbed75966db!2sMississauga%2C%20ON!5e0!3m2!1sen!2sca!4v1725305114381!5m2!1sen!2sca" width="1920" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
				</div>
			</div>
		</div>
	</div>
<?php
include "includes/footer.php";
?>
