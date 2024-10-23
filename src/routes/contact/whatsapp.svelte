<script lang="ts">
  import WhatsApp from "virtual:icons/ri/whatsapp-fill";
</script>

<div class="whatsapp-banner">
  <div class="whatsapp-content">
    <WhatsApp class="whatsapp-icon" />
    <div class="whatsapp-text">
      <h2>Quick Support via WhatsApp</h2>
      <p>Get instant quotes and personalized assistance</p>
    </div>
  </div>
  <a href="https://wa.me/YOUR_PHONE_NUMBER" class="whatsapp-button">
    Message us
  </a>
</div>

<style>
  .whatsapp-banner {
    /* Keep existing styles */
    background-color: #25d366;
    color: white;
    padding: 2vw 3vw; /* Match contact-info padding */
    border-radius: 5px; /* Match contact-info border-radius */
    margin: 2rem; /* Match contact-info margin */
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .whatsapp-content {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .whatsapp-text h2 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
  }

  .whatsapp-text p {
    margin: 0.25rem 0 0 0;
    opacity: 0.9;
  }

  .whatsapp-button {
    background-color: white;
    color: #25d366;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    transition: transform 0.2s;
  }

  .whatsapp-button:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 600px) {
    .whatsapp-banner {
      padding: 10%; /* Match contact-info mobile padding */
      margin: 1rem auto; /* Match contact-info mobile margin */
    }

    .whatsapp-content {
      flex-direction: column;
      gap: 0.75rem;
    }

    .whatsapp-button {
      width: 100%;
      text-align: center;
    }
  }

  @media (max-width: 400px) {
    .whatsapp-banner {
      flex-direction: column;
      gap: 1rem;
      padding: 10%; /* Match contact-info mobile padding */
      margin: 1rem auto; /* Match contact-info mobile margin */
    }

    .whatsapp-content {
      flex-direction: column;
      gap: 0.35rem;
    }

    .whatsapp-button {
      width: 100%;
      text-align: center;
    }
  }
</style>
