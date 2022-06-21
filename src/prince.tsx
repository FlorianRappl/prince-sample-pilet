import './assets/web/game.css';
import * as React from 'react';
import 'phaser';
import './game/Boot';
import './game/Preloader';
import './game/Game';
import './game/Utils';
import './game/Title';
import './game/EndTitle';
import './game/Credits';
import './game/Cutscene';
import './game/Scene';
import './game/Level';
import './game/LevelBuilder';
import './game/Actor';
import './game/Fighter';
import './game/Enemy';
import './game/Kid';
import './game/Mouse';
import './game/Interface';
import './game/tiles/Base';
import './game/tiles/Button';
import './game/tiles/Chopper';
import './game/tiles/Clock';
import './game/tiles/ExitDoor';
import './game/tiles/Gate';
import './game/tiles/Loose';
import './game/tiles/Mirror';
import './game/tiles/Potion';
import './game/tiles/Skeleton';
import './game/tiles/Spikes';
import './game/tiles/Star';
import './game/tiles/Sword';
import './game/tiles/Torch';

declare global {
  interface Window {
    PrinceJS: any;
    Phaser: any;
  }
}

let game, canvas;

const PrinceOfPersiaGame: React.FC = () => {
  const root = React.useRef<HTMLDivElement>();

  React.useEffect(() => {
    if (!game) {
      const PrinceJS = window.PrinceJS;
      const Phaser = window.Phaser;
      game = new Phaser.Game(640, 400, Phaser.AUTO, root.current, null, false, false);

      game.state.add('Boot', PrinceJS.Boot);
      game.state.add('Preloader', PrinceJS.Preloader);
      game.state.add('Game', PrinceJS.Game);
      game.state.add('Title', PrinceJS.Title);
      game.state.add('EndTitle', PrinceJS.EndTitle);
      game.state.add('Credits', PrinceJS.Credits);
      game.state.add('Cutscene', PrinceJS.Cutscene);
      game.state.start('Boot');

      setTimeout(() => {
        canvas = root.current.querySelector('canvas');
      }, 0);
    } else {
      root.current.appendChild(canvas);
      game.gameResumed();
    }

    return () => game.gamePaused();
  });

  return <div className="prince-game" id="gameContainer" ref={root} />;
};

export default PrinceOfPersiaGame;
