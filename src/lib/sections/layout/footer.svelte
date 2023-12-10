<script>
  import Container from "$lib/components/container.svelte";
  import CircularButton from "$lib/components/circular_button.svelte";
  import Facebook from "virtual:icons/gg/facebook";
  import Twitter from "virtual:icons/ant-design/twitter-outlined";
  import Instagram from "virtual:icons/ant-design/instagram";
  import Location from "virtual:icons/typcn/location";
  import Phone from "virtual:icons/solar/phone-linear";
  import Email from "virtual:icons/iconamoon/email";
</script>

<Container style="background-color: #040707;">
  <div class="footer">
    <div class="left">
      <h3>
        Empowering lives with the most advanced defibrillation technology.
      </h3>
      <div class="icon">
        <CircularButton>
          <Facebook />
        </CircularButton>
        <CircularButton>
          <Twitter />
        </CircularButton>
        <CircularButton>
          <Instagram />
        </CircularButton>
      </div>
    </div>

    <div class="right">
      <div class="sub-div">
        <h4>Quick Links</h4>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Home</p>
        <p>Testimonials</p>
        <p>Products & Training</p>
      </div>

      <div class="sub-div">
        <h4>Support & Services</h4>
        <p>FAQs</p>
        <p>Technical Support</p>
        <p>Warranty & Returns</p>
        <p>Training & Workshops</p>
      </div>

      <div class="sub-div">
        <h4>Contact Us</h4>
        <div class="contactContainer">
          <CircularButton bgColor="#363939" scale=".8">
            <Location />
          </CircularButton>
          <div class="addressText">
            <p>Iggy Street <br /> 1000 - Switzerland</p>
          </div>
        </div>
        <div class="contactContainer">
          <CircularButton bgColor="#363939" scale=".8">
            <Phone />
          </CircularButton>
          <div class="addressText">
            <p>+41 21 311 25 38</p>
          </div>
        </div>
        <div class="contactContainer">
          <CircularButton bgColor="#363939" scale=".8">
            <Email />
          </CircularButton>
          <div class="addressText">
            <p>info@swissdefibrillator.ch</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</Container>
<div class="endContainer">
  <hr class="gray-line" />

  <div class="divider">
    <span>Terms & Conditions</span>
    <span>Privacy Polices</span>
  </div>
</div>

<style>
  .footer {
    display: flex;
    color: white;
    align-items: top;
    gap: 15vw;
    padding-top: 3.5vw;
    padding-bottom: 3vw;
  }

  .left,
  .right {
    display: flex;
    flex-direction: column;
  }

  .left h3 {
    width: 17vw;
  }

  .right {
    display: flex;
    flex-direction: row;
  }

  .contactContainer {
    display: flex;
    gap: 0.7vw;
    align-items: center;
    margin-bottom: 0.7vw;
  }

  .addressText p {
    margin: 0;
  }

  .right p {
    color: #b9b9b9;
    font-size: 1vw;
  }

  .sub-div {
    margin-left: 20px;
  }

  .icon {
    display: flex;
    gap: 0.8vw;
  }

  .endContainer {
    background-color: #040707;
  }

  .gray-line {
    margin: 0;
    color: #363939;
  }

  .divider {
    display: flex;
    gap: 1vw;
    justify-content: center;
    padding-bottom: 0.5vw;
    padding: 0.8vw;
    color: #b9b9b9;
  }
</style>
