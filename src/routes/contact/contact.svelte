<script lang="ts">
  import { _ } from "svelte-i18n";
  import CircularButton from "$lib/components/circular_button.svelte";
  import Facebook from "virtual:icons/gg/facebook";
  import Twitter from "virtual:icons/ant-design/twitter-outlined";
  import Instagram from "virtual:icons/ant-design/instagram";
  import Location from "virtual:icons/typcn/location";
  import Phone from "virtual:icons/solar/phone-linear";
  import Email from "virtual:icons/iconamoon/email";
  import { ContactInfo } from "$lib/info";
</script>

<div class="contact-info">
  <div class="header">
    <h1>
      {$_("contact_title")}
    </h1>
    <p class="subtitle">
      {$_("contact_sub_title")}
    </p>
  </div>

  <div class="sub-div">
    <div class="contactContainer">
      <CircularButton bgColor="#363939" scale=".8">
        <Phone />
      </CircularButton>
      <div class="phoneNumber">
        <a href="tel:{ContactInfo.getPhoneNumber()}"
          ><p>{ContactInfo.getPhoneNumber()}</p></a
        >
      </div>
    </div>
    <div class="contactContainer">
      <CircularButton bgColor="#363939" scale=".8">
        <Email />
      </CircularButton>
      <div class="email">
        <a href="mailto:{ContactInfo.getEmail()}"
          ><p>{ContactInfo.getEmail()}</p></a
        >
      </div>
    </div>
    <div class="contactContainer">
      <CircularButton bgColor="#363939" scale=".8">
        <Location />
      </CircularButton>
      <div class="address">
        <p>{ContactInfo.getAddress()}</p>
      </div>
    </div>
  </div>

  <div class="closing-text">
    <p>
      {$_("section_contact_closing_text")}
    </p>
  </div>

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

<style>
  a {
    display: block; /* Makes the entire area clickable */
    text-decoration: none; /* Removes underline from links */
    text-align: left;
    color: white; /* White text color */
  }

  .contact-info {
    padding: 2vw;
    padding-right: 3vw;
    padding-left: 3vw;
    background-color: #000; /* Black background */
    border-radius: 5px;
    text-align: center;
    color: #fff; /* White text */
    margin: 2rem;
    text-align: left;
  }

  h1 {
    margin-top: 0;
  }

  .subtitle {
    margin-bottom: 1rem;
    color: #fff; /* White text */
    font-size: 1.2em;
  }

  .sub-div {
    display: flex;
    gap: 2vw;
  }

  .contactContainer {
    display: flex;
    gap: 0.7vw;
    align-items: center;
    margin-bottom: 0.7vw;
  }

  .phoneNumber {
    white-space: nowrap;
  }

  .closing-text {
    margin-top: 2rem;
    font-style: italic;
    color: #fff; /* White text */
  }

  .icon {
    display: flex;
    gap: 20px;
  }

  /* Media query for screens with a max width of 600px */
  @media (max-width: 600px) {
    .contact-info {
      display: block; /* Optional: Change display back to block if needed */
      padding: 10%; /* Adjust padding for smaller screens */
      margin: 1rem auto; /* Adjust margin for smaller screens */
      border-radius: 0px;
    }

    .sub-div {
      flex-direction: column; /* Stack the flex items vertically */
      align-items: start;
    }

    .contactContainer {
      justify-content: center; /* Center the flex items if needed */
    }

    .icon {
      justify-content: center; /* Center icons for a better look on small screens */
      flex-wrap: wrap; /* Wrap icons to the next line if there's not enough space */
    }

    /* Adjust font sizes if necessary */
    h1,
    .subtitle,
    .closing-text p {
      font-size: smaller; /* Adjust font size for smaller screens */
    }
  }
</style>
