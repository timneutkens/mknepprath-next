import Head from "next/head";

import Page from "../../core/page";

export default () => (
  <Page>
    <Head>
      <title key="title">Video Games Are Evolving!</title>
    </Head>

    <div className={"blog-container container"}>
      <h1>Video Games Are Evolving!</h1>

      <p>
        Last week I discussed the future of gaming, and mentioned that we’d be
        revisiting the subject and seeing how current technology could be used
        to reinvigorate big franchise games. That’s right. It’s time to talk
        about Pokémon.
      </p>
      <p>
        Nintendo was one of the first gaming companies to introduce{" "}
        <a href="http://www.youtube.com/watch?v=yk3rSX-vOVw">
          augmented reality tech
        </a>{" "}
        to their audience. They love introducing new technology to their fans,
        like the Wii with it’s motion controllers. Hey, Nintendo! This is what
        your next big project should be.
      </p>
      <ol>
        <li>
          <strong>Non-player characters.</strong> By connecting a Kinect sensor
          with some augmented reality glasses, a man has{" "}
          <a href="http://www.sciencespacerobots.com/blog/71520123">
            already created a life-sized NPC
          </a>{" "}
          that follows him around. He can even interact with it by patting it on
          the head and moving its tie. Remember how Pikachu used to{" "}
          <a href="http://www.emuparadise.me/fup/up/67984-Pokemon_-_Yellow_Version_(USA,_Europe)-7-thumb.png">
            follow you around
          </a>{" "}
          way back in Yellow? Yeah, that’s totally possible. This, of course,
          would work for all NPCs, such as other Pokémon, trainers, or shop
          owners, who would all be able to walk around you and interact with you
          and the environment around them.
        </li>
        <li>
          <strong>Tall grass.</strong> Holophonic sound is going to bring this
          whole experience to life, but it could be especially useful for
          finding Pokémon. If you wanted to find one in the games thus far,
          you’d walk around in tall grass until you basically tripped on one.
          With this new game, tall grass would be randomly generated in certain
          spots on the ground around you. Now, you could go tromping around in
          it… or you could listen for the sound of rustling. Using sound to
          pinpoint the location of things in games has never been{" "}
          <a href="http://www.youtube.com/watch?v=x5G3HUiscW4">
            this realistic
          </a>
          .
        </li>
        <li>
          <strong>Shops & Pokémon Centers.</strong> Here’s how actual businesses
          could get involved in this game. A store like Target could place a
          marker anywhere in their store. This marker tells your goggles to put
          a shop there. Virtual shelves are lined with virtual goods, such as
          pokéballs and healing potions. These items can be purchased with the
          in-game money. If Target wants to capitalize on this extra virtual
          business, they can offer store-exclusive content that can be purchased
          with real money.
        </li>
        <li>
          <strong>Battle.</strong> Although I’d prefer that they move away from
          their current turn-based system, all I really want is to see the fight
          happening between my and my opponent. Whether they create new battle
          mechanics, or set it up Pokémon Stadium-style, I don’t care.
        </li>
      </ol>
      <p>
        The interesting thing about all of this for me is that it can almost
        make the Pokémon TV show into a non-fictional story. What if Pokémon
        takes place in the future, when augmented reality contact lenses are
        essential to interact with the environment, machines, and other people?
        What if they’re never mentioned because of how commonplace they are?
        Suddenly, many of the crazy sci-fi stories we’ve read or watched become
        reality.
      </p>
    </div>
  </Page>
);