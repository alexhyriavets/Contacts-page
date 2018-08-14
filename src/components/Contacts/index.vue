<template>
  <section class="contacts">
    <div class="container">
      <h1 class="contacts__title">Contacts</h1>
      <div class="contacts__content">
        <div class="contacts__left">
          <h2 class="contacts__subtitle section-title">
            <span class="green">gms</span>
            Headquarters
          </h2>
          <div class="contacts__left-content-wrapper">
            <div class="contacts__address-wrapper">
              <p class="contacts__address">
                Global Message Services Ukraine LLC <br>
                Bundesstrasse 5 | 3rd Floor <br>
                6300 Zug <br>
                Switzerland
              </p>
              <p class="contacts__phone-number">+41 41 544 62 00</p>
            </div>
            <div class="contacts__contact-info-wrapper">
              <p class="contacts__contact-info-title">Email</p>
              <a href="#" class="contacts__contact-info">info@gms-worldwide.com</a>
              <p class="contacts__contact-info-title">Send message</p>
              <a href="#" class="contacts__contact-info">viber us</a>
              <p class="contacts__contact-info-title">Send form</p>
              <a href="#" class="contacts__contact-info">contact us</a>
            </div>
          </div>
        </div>
        <div class="contacts__right">
          <h2 class="contacts__subtitle section-title">
            Technical support
            <span class="green  ">24/7</span>
          </h2>
          <p class="contacts__technical-info">
            GMS understands that it can be hard to follow all new technologies. We regularly provide for all our clients educational trainings to make your operator`s business earn more and better though our best practices.
          </p>
          <p class="contacts__phone-number">+41 41 544 62 06</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.green {
  color: $primary-green;
}

.contacts {
  font-family: $primary-font;
  background-color: $white;
  color: $primary-grey;
  padding-bottom: 94px;

  &__content {
    display: flex;
    justify-content: space-between;
  }

  &__title {
    padding: 60px 0 45px 0;
    font-size: 3.125rem;
  }

  &__subtitle {
    color: $primary-grey;
    margin-bottom: 45px;

    & span {
      text-transform: uppercase;
    }
  }

  &__address-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 155px;
  }

  &__address {
    font-size: 0.9375rem;
    line-height: 28px;
  }

  &__phone-number {
    font-size: 1.625rem;
    color: $primary-green;
  }

  &__left-content-wrapper {
    display: flex;
  }

  &__contact-info {
    font-size: 0.875rem;
    color: $primary-green;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    white-space: nowrap;

    &:hover {
      opacity: 0.8;
    }

    &-wrapper {
      font-size: 0.9375rem;
      line-height: 28px;
      margin-left: 33px;
    }
  }

  &__right {
    width: 535px;
  }

  &__technical-info {
    font-size: 0.9375rem;
    margin-bottom: 32px;
    line-height: 28px;
  }
}
</style>
