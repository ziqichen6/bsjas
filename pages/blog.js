import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';

class Blog extends React.Component {
  render () {
    return (
      <div className="post">
        <Helmet
          title={config.siteTitle}
        />
        <div className="header">
          <h1>The Historical Jesus in India</h1>
        </div>
        <div className="author">
          <div>By Ariana Pemberton</div>
        </div>
        <div className="post-social">
          <img src="/assets/facebook.png"/>
          <img src="/assets/twitter.png"/>
          <img src="/assets/mail.png"/>
        </div>
        <div className="post-img">
          <img src="/assets/blog-pic.png"/>
          <div>PHOTO CREDIT: The Guardian</div>
        </div>
        <div className="post-text">
          <p>At the beginning of September 2016, athletes from forty countries gathered to celebrate Central Asian culture and traditions at the World Nomad Games in Cholpon-Ata, Kyrgyzstan. The games included many different sports that were historically played by the nomadic peoples of Central Asia, such as hunting with eagles and dogs, archery, mas-wrestling (a competition between two wrestlers trying to grasp a small stick), and the fast and fierce sport of kok-boru (a nomadic version of polo where riders on horseback fight over a beheaded goat carcass). Although the majority of athletes at the games represented countries with nomadic backgrounds, such as Kyrgyzstan, Kazakhstan, and other Central Asian states, there were also participants from nations ranging from the United States to Zimbabwe.</p>
          <p>This was one of the rare occasions where people from all over the world were able to witness Central Asian history and culture in action through the region's unique sports. Kok-boru was the highlight of the games for many viewers; the sport is extremely fast-paced and aggressive, with competitors galloping on horseback to gain control of a dead goat. In order to drop the carcass in the goal zone at the end of the field, players must go through a whirlwind of punches, whips, and battling horses. Many other sports at the games involved horseback riding, including racing, archery, and horseback wrestling.</p>
          <p>The games took place in Cholpon-Ata, a resort town on the shore of Kyrgyzstan's famous Issyk Kul Lake - a popular summer vacation destination for visitors from around the former Soviet Union and beyond. This is the second year that Kyrgyzstan has hosted the biennial games, albeit with a much larger budget and scale than last time. A newly built hippodrome for 10,000 spectators housed many of the sports, including kok-boru. The hippodrome also became the stage for the magnificent opening ceremony, which included breathtaking performances from male and female horseback riders, traditional singers, and dancers. One of the highlights of the ceremony was a horseman who rode around the hippodrome while on fire. Kyrgyzstan's president, Almazbek Atambayev, spoke at the ceremony and highlighted the importance of preserving Central Asian history and looking to it as an example of "sustainable development." Interestingly, the honorary guest of the World Nomad Games was none other than Steven Seagal, who arrived at the ceremony on horseback, clad in ancient Kyrgyz armor.</p>
        </div>
      </div>
    );
  }
}

export default Blog;
