<template>
  <div class="hello">
      <div id="scroll-change" class="scroll-change">
          <i class="tech-icon tech-icon-chevron-down"></i>
      </div>
      <div id="menu-mobile" class="menu-mobile">
          <div class="menu-mobile-header">
              <div class="position-relative">
                  <div id="select-language" class="box-select">
                      <img class="flag-img-mobile img-vietnam" src="../assets/img/vietnam.png" alt="">
                      <img class="flag-img-mobile img-english" src="../assets/img/united-states.png" alt="">
                      <i class="tech-icon tech-icon-triangle"></i>
                  </div>
                  <ul id="box-language-mobile" class="box-language box-language-mobile">
                      <li id="flag-vietnam-mobile">
                          <i class="tech-icon tech-icon-check"></i>
                          <img class="flag-img" src="../assets/img/vietnam.png" alt="">
                          <span>{{$t('vietnamese')}}</span>
                      </li>
                      <li id="flag-english-mobile" class="active">
                          <i class="tech-icon tech-icon-check"></i>
                          <img class="flag-img" src="../assets/img/united-states.png" alt="">
                          <span>{{$t('english')}}</span>
                      </li>
                  </ul>
              </div>
              <div id="close-menu" class="close-icon">
                  <i class="tech-icon tech-icon-close"></i>
              </div>
          </div>
          <ul class="box-menu">
              <li class="item-menu js-about-us-menu"><a href="#about-us" class="js-about-us-menu">
                  {{ $t("about_us") }}
              </a></li>
              <li class="item-menu"><a href="#games">{{ $t("games") }}</a></li>
              <li class="item-menu"><a href="#partners">{{ $t("partners") }}</a></li>
              <li class="item-menu"><a href="#contact-us">{{ $t("contact_us") }}</a></li>
          </ul>
      </div>

      <section id="wrapper-test" class="wrapper-test">
          <section class="wrapper-header">
              <header class="header">
                  <img class="logo-tech" src="../assets/img/white_logo.png" alt="z-tech">
                  <nav class="menu-header show-web">
                      <a href="#about-us" class="js-about-us-menu">{{ $t("about_us") }}</a>
                      <a href="#games">{{ $t("games") }}</a>
                      <a href="#partners">{{ $t("partners") }}</a>
                      <a href="#contact-us">{{ $t("contact_us") }}</a>
                      <a id="flag-language" href="javascript:;" class="change-language">
                          <img class="flag-img img-vietnam" src="../assets/img/vietnam.png" alt="">
                          <img class="flag-img img-english" src="../assets/img/united-states.png" alt="">
                          <i class="tech-icon tech-icon-triangle"></i>
                          <ul id="box-language" class="box-language">
                              <li id="flag-vietnam">
                                  <i class="tech-icon tech-icon-check"></i>
                                  <img class="flag-img" src="../assets/img/vietnam.png" alt="">
                                  <span style="width: 55px">{{$t('vietnamese')}}</span>
                              </li>
                              <li id="flag-english" class="active">
                                  <i class="tech-icon tech-icon-check"></i>
                                  <img class="flag-img" src="../assets/img/united-states.png" alt="">
                                  <span style="width: 55px">{{$t('english')}}</span>
                              </li>
                          </ul>
                      </a>
                  </nav>
                  <div id="show-menu-mobile" class="icon-menu show-mobile">
                      <i class="tech-icon tech-icon-menu"></i>
                  </div>
              </header>
              <div class="header-content">
                  <div class="box-ready">
                      <h1 class="title">{{$t('we_ready')}}</h1>
                      <div class="box-timer" id="timer">
                          <div class="timer-item" id="days">
                              <span class='timer-number js-days-number'></span><span class="timer-text">{{$t('days')}}</span>
                          </div>
                          <span class="timer-division">:</span>
                          <div class="timer-item" id="hours">
                              <span class='timer-number js-hours-number'></span><span class="timer-text">{{$t('hours')}}</span>
                          </div>
                          <span class="timer-division">:</span>
                          <div class="timer-item" id="minutes">
                              <span class='timer-number js-minutes-number'></span><span class="timer-text">{{$t('minutes')}}</span>
                          </div>
                          <span class="timer-division">:</span>
                          <div class="timer-item" id="seconds">
                              <span class='timer-number js-seconds-number'></span><span class="timer-text">{{$t('seconds')}}</span>
                          </div>
                      </div>
                  </div>
                  <div class="box-description">
                      <p class="mb-3">{{$t('we_will_back')}}</p>
                      <div class="input-search">
                          <input :placeholder="$t('enter_email')" type="text">
                          <i class="tech-icon tech-icon-arrow-right"></i>
                      </div>
                  </div>
              </div>
              <img class="img-fairy" src="../assets/img/fairy.png" alt="">
          </section>
          <section class="wrapper-about">
              <div class="row">
                  <div class="col-md-6">
                      <h2 class="title-about title-common" id="about-us">{{$t('about_us_title')}}</h2>
                      <p class="description-about">
                          {{$t('about_us_content')}}
                      </p>
                      <div class="mobile-flex">
                          <div>
                              <h3 class="title-user">600<span>M</span>+</h3>
                              <h5 class="color-black font-weight-bold mb-4">{{$t('users')}}</h5>
                          </div>
                          <div>
                              <h3 class="title-user">135+</h3>
                              <h5 class="color-black font-weight-bold">{{$t('games_title')}}</h5>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="box-about">
                          <div class="item-about">
            <span class="circle-icon">
              <i class="tech-icon tech-icon-calendar-tick"></i>
            </span>
                              <div class="item-about--content">
                                  <h5>{{$t('access_time')}}</h5>
                                  <p>{{$t('access_time_content')}}</p>
                              </div>
                          </div>
                          <div class="item-about">
            <span class="circle-icon">
              <i class="tech-icon tech-icon-pen-tool-2"></i>
            </span>
                              <div class="item-about--content">
                                  <h5>{{$t('design')}}</h5>
                                  <p>{{$t('design_content')}}</p>
                              </div>
                          </div>

                          <div class="item-about">
            <span class="circle-icon">
              <i class="tech-icon tech-icon-people"></i>
            </span>
                              <div class="item-about--content">
                                  <h5>{{$t('team')}}</h5>
                                  <p>{{$t('team_content')}}</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="box-about-image">
                  <img class="img-witch img-responsive" src="../assets/img/witch.png" alt="">
                  <img class="img-map img-responsive" src="../assets/img/Pin-map.png" alt="">
              </div>
          </section>
          <section class="wrapper-our-games">
              <div class="our-games-header text-center">
                  <h2 class="title-common" id="games">{{$t('our_games')}}</h2>
                  <p class="our-games--description">{{$t('our_games_content')}}</p>
              </div>
              <div class="box-images">
                  <div class="column-image column-old">
                      <div class="image-item">
                          <img class="img-responsive" src="../assets/img/item-1.png" alt="">
                          <div class="image-item--content">
                              <h3 class="title">E-Space</h3>
                              <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                      </div>

                      <div class="image-item">
                          <img class="img-responsive" src="../assets/img/item-5.png" alt="">
                          <div class="image-item--content">
                              <h3 class="title">Pirates</h3>
                              <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                      </div>

                      <div class="image-item">
                          <img class="img-responsive" src="../assets/img/item-9.png" alt="">
                          <div class="image-item--content">
                              <h3 class="title">Magic tree</h3>
                              <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                      </div>
                  </div>

                  <div class="column-image column-event mobile-column-about">
                      <div class="image-item">
                          <img class="img-responsive" src="../assets/img/item-2.png" alt="">
                          <div class="image-item--content">
                              <h3 class="title">Kingland</h3>
                              <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                      </div>

                      <div class="image-item">
                          <img class="img-responsive" src="../assets/img/item-6.png" alt="">
                          <div class="image-item--content">
                              <h3 class="title">Witch Party</h3>
                              <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                      </div>

                      <div class="image-item">
                          <img class="img-responsive" src="../assets/img/item-10.png" alt="">
                          <div class="image-item--content">
                              <h3 class="title">Aborigines</h3>
                              <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                      </div>
                  </div>

                  <div class="column-image column-old mobile-column-about-inside">
                      <div class="image-item">
                          <img class="img-responsive" src="../assets/img/item-3.png" alt="">
                          <div class="image-item--content">
                              <h3 class="title">The Last <br> Game</h3>
                              <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                      </div>

                      <div class="image-item">
                          <img class="img-responsive" src="../assets/img/item-7.png" alt="">
                          <div class="image-item--content">
                              <h3 class="title">Rocky</h3>
                              <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                      </div>

                      <div class="image-item">
                          <img class="img-responsive" src="../assets/img/item-11.png" alt="">
                          <div class="image-item--content">
                              <h3 class="title">Cinderella</h3>
                              <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                      </div>
                  </div>

                  <div class="column-image column-event">
                      <div class="image-item">
                          <img class="img-responsive" src="../assets/img/item-4.png" alt="">
                          <div class="image-item--content">
                              <h3 class="title">G-Dragon</h3>
                              <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                      </div>

                      <div class="image-item">
                          <img class="img-responsive" src="../assets/img/item-8.png" alt="">
                          <div class="image-item--content">
                              <h3 class="title">Blue Fire</h3>
                              <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                      </div>

                      <div class="image-item">
                          <img class="img-responsive" src="../assets/img/item-12.png" alt="">
                          <div class="image-item--content">
                              <h3 class="title">Egypt Game</h3>
                              <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                      </div>
                  </div>
              </div>

          </section>

          <section class="wrapper-our-partners">
              <h2 class="title-common text-center mb-5" id="partners">{{$t('our_partner')}}</h2>
              <div class="carousel">
                  <div class="arrow-slick slick-left">
                      <i class="tech-icon tech-icon-chevron-down"></i>
                  </div>
                  <div class="arrow-slick slick-right">
                      <i class="tech-icon tech-icon-chevron-down"></i>
                  </div>
                  <div id="slick-games" class="slick-carousel">
                      <div>
                          <img class="img-responsive" src="../assets/img/game-1.png" alt="">
                      </div>
                      <div>
                          <img class="img-responsive" src="../assets/img/game-2.png" alt="">
                      </div>
                      <div>
                          <img class="img-responsive" src="../assets/img/game-3.png" alt="">
                      </div>
                      <div>
                          <img class="img-responsive" src="../assets/img/game-4.png" alt="">
                      </div>
                      <div>
                          <img class="img-responsive" src="../assets/img/game-5.png" alt="">
                      </div>
                      <div>
                          <img class="img-responsive" src="../assets/img/game-6.png" alt="">
                      </div>
                      <div>
                          <img class="img-responsive" src="../assets/img/game-7.png" alt="">
                      </div>
                  </div>
              </div>
          </section>


          <section class="container-footer" id="contact-us">
              <div class="row-footer">
                  <div class="col-footer col-logo">
                      <img class="d-block" src="../assets/img/white_logo.png" alt="">
                      <div class="icon-social">
                          <i class="tech-icon tech-icon-twitter"></i>
                          <i class="tech-icon tech-icon-facebook"></i>
                          <i class="tech-icon tech-icon-linkedin"></i>
                      </div>
                  </div>
                  <div class="col-footer col-address">
                      <h4 class="title-footer">{{$t('address')}}</h4>
                      <div class="box-content-footer">
                          <div class="mr-3">
                              <i class="tech-icon tech-icon-location"></i>
                          </div>
                          <div>
                              <p class="mb-2">{{$t('us_address')}}</p>
                              <p>{{$t('vn_address')}}</p>
                          </div>
                      </div>
                      <div class="box-content-footer">
                          <div class="mr-3">
                              <i class="tech-icon tech-icon-mobile"></i>
                          </div>
                          <div>
                              <p>(+1) 555-0108-000 {{$t('or')}} (+236) 555-0108</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-footer col-subcribe">
                      <h4 class="title-footer">{{$t('subscribe')}}</h4>
                      <div class="subscribe-content">
                          <p>{{$t('subscribe_content')}}</p>
                          <div class="input-search input-footer">
                              <input :placeholder="$t('enter_email')" type="text">
                              <i class="tech-icon tech-icon-arrow-right"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <footer class="footer">2017 Copyright. Policy.</footer>
      </section>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import "../assets/scss/index.scss";
</style>
