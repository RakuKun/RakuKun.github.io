function CommentDoc(fn) {
  return fn.toString().split('\n').slice(1, -1).join('\n') + '\n';
}

var tmpl = CommentDoc(function () {
  /*
    <span id="cursor-outline"></span>
    <span id="cursor"></span>
    <div id='home'>
      <a onclick="transitionToPage('../')"> ◯ </a>
    </div>
    <div id='menu'>
      <a> ≡ </a>
    </div>
    <div id='menu-page'>
      <div class='category'>
        <div class='entry-title'>Games</div>
        <a
          class='entry'
          onclick="transitionToPage('../games/stealth-level','var(--rurikon)')">
          Stealth Level Design
        </a>
        <br />
        <a
          class='entry'
          onclick="transitionToPage('../games/combat-zone','var(--rurikon)')">
          Multiplayer Combat Zone Design
        </a>
        <br />
        <a
          class='entry'
          onclick="transitionToPage('../games/bvw','var(--rurikon)')">
          Building Virtual Worlds
        </a>
        <br />
        <a
          class='entry'
          onclick="transitionToPage('../games/ditto','var(--rurikon)')">
          Project Ditto
        </a>
        <br />
        <a
          class='entry'
          onclick="transitionToPage('../games/cosmos','var(--rurikon)')">
          Cosmos
        </a>
        <br />
        <a
          class='entry'
          onclick="transitionToPage('../games/collection','var(--rurikon)')">
          Mini Game Collection
        </a>
      </div>
      <div class='category'>
        <div class='entry-title'>Analysis</div>
        <a
          class='entry'
          onclick="transitionToPage('../analysis/bloodborne','var(--sohi)')">
          Bloodborne: Story in Levels
        </a>
        <br />
        <a
          class='entry'
          onclick="transitionToPage('../analysis/level-analysis','var(--sohi)')">
          Level Analysis
        </a>
        <br />
        <a
          class='entry'
          onclick="transitionToPage('../analysis/slay-the-spire','var(--sohi)')">
          Slay the Spire: Engagement and Balancing
        </a>
        <br />
        <a
          class='entry'
          onclick="transitionToPage('../analysis/inside','var(--sohi)')">
          INSIDE: Visual Language
        </a>
        <br />
        <a
          class='entry'
          onclick="transitionToPage('../analysis/the-plan','var(--sohi)')">
          The Plan: An Experiment
        </a>
      </div>
      <div class='category'>
        <div class='entry-title'>Gallery</div>
        <a
          class='entry'
          onclick="transitionToPage('../gallery/art','var(--kurenai)')">
          Art
        </a>
        <br />
        <a
          class='entry'
          onclick="transitionToPage('../gallery/photography','var(--kurenai)')">
          Photography
        </a>
        <br />
        <a
          class='entry'
          onclick="transitionToPage('../gallery/design','var(--kurenai)')">
          Design
        </a>
      </div>
      <div class='category'>
        <div class='entry-title'>Blog</div>
        <a
          class='entry'
          onclick="transitionToPage('../blog/quest-mmorpg','var(--shironeri)')">
          Creating Quests for MMORPG
        </a>
        <br />
        <a
          class='entry'
          onclick="transitionToPage('../blog/formulas','var(--shironeri)')">
          Formulas in Combat Design
        </a>
        <br />
        <a
          class='entry'
          onclick="transitionToPage('../blog/balance','var(--shironeri)')">
          Balancing a Game
        </a>
        <br />
        <a
          class='entry'
          onclick="transitionToPage('../blog/design-diary','var(--shironeri)')">
          Design Diary
        </a>
        <br />
        <a
          class='entry'
          onclick="transitionToPage('../blog/another-inferno','var(--shironeri)')">
          Another Inferno
        </a>
      </div>
    </div>
*/
});

var newHtml = tmpl.substring(5, tmpl.length - 5);

//console.log(newHtml);

var nav = document.getElementById('nav');

nav.innerHTML = newHtml;
