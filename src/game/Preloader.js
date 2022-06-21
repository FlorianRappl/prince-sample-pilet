import PrologueA from '../assets/music/01_Prologue_A.mp3';
import PrologueB from '../assets/music/02_Prologue_B.mp3';
import Danger from '../assets/music/06_Danger.mp3';
import Accident from '../assets/music/07_Accident.mp3';
import Potion1 from '../assets/music/08_Potion_1.mp3';
import Victory from '../assets/music/09_Victory.mp3';
import Prince from '../assets/music/11_Prince.mp3';
import Potion2 from '../assets/music/14_Potion_2.mp3';
import kidAnims from '../assets/anims/kid.json';
import swordAnims from '../assets/anims/sword.json';
import fighterAnims from '../assets/anims/fighter.json';
import princessAnims from '../assets/anims/princess.json';
import shadowAnims from '../assets/anims/shadow.json';
import vizierAnims from '../assets/anims/vizier.json';
import mouseAnims from '../assets/anims/mouse.json';
import FreeFallLand from '../assets/sfx/01_Free_fall_land.mp3';
import LooseFloorLands from '../assets/sfx/02_Loose_floor_lands.mp3';
import LooseFloorShakes1 from '../assets/sfx/03_Loose_floor_shakes.mp3';
import GateComingDownSlow from '../assets/sfx/04_Gate_coming_down_slow.mp3';
import GateRising from '../assets/sfx/05_Gate_rising.mp3';
import GateReachesBottomClang from '../assets/sfx/06_Gate_reaches_bottom_clang.mp3';
import GateStopsAtTop from '../assets/sfx/07_Gate_stops_at_top.mp3';
import BumpIntoWallSoft from '../assets/sfx/08_Bump_into_wall_soft.mp3';
import BumpIntoWallHard from '../assets/sfx/09_Bump_into_wall_hard.mp3';
import SwordClash from '../assets/sfx/10_Sword_clash.mp3';
import StabAir from '../assets/sfx/11_Stab_air.mp3';
import StabOpponent from '../assets/sfx/12_Stab_opponent.mp3';
import StabbedByOpponent from '../assets/sfx/13_Stabbed_by_opponent.mp3';
import MediumLandingOof from '../assets/sfx/14_Medium_landing_oof.mp3';
import SoftLanding from '../assets/sfx/15_Soft_landing.mp3';
import UnsheatheSword from '../assets/sfx/16_Unsheathe_sword.mp3';
import LooseFloorShakes3 from '../assets/sfx/17_Loose_floor_shakes_3.mp3';
import LooseFloorShakes2 from '../assets/sfx/18_Loose_floor_shakes_2.mp3';
import FloorButton from '../assets/sfx/19_Floor_button.mp3';
import Footsteps from '../assets/sfx/20_Footsteps.mp3';
import BonesLeapToLife from '../assets/sfx/21_Bones_leap_to_life.mp3';
import Mirror from '../assets/sfx/22_Mirror.mp3';
import HalvedByChopper from '../assets/sfx/23_Halved_by_chopper.mp3';
import SlicerBladesClash from '../assets/sfx/24_Slicer_blades_clash.mp3';
import HardLandingSplat from '../assets/sfx/25_Hard_landing_splat.mp3';
import ImpaledBySpikes from '../assets/sfx/26_Impaled_by_spikes.mp3';
import DoorSqueak from '../assets/sfx/27_Door_squeak.mp3';
import FallingFloorLands from '../assets/sfx/28_Falling_floor_lands.mp3';
import EntranceDoorCloses from '../assets/sfx/29_Entrance_door_closes.mp3';
import ExitDoorOpening from '../assets/sfx/30_Exit_door_opening.mp3';
import DrinkPotionGlugGlug from '../assets/sfx/31_Drink_potion_glug_glug.mp3';
import Beep from '../assets/sfx/32_Beep.mp3';
import SpikedBySpikes from '../assets/sfx/33_Spiked_by_spikes.mp3';
import kidJson from '../assets/gfx/kid.json';
import princessJson from '../assets/gfx/princess.json';
import vizierJson from '../assets/gfx/vizier.json';
import mouseJson from '../assets/gfx/mouse.json';
import guard1Json from '../assets/gfx/guard-1.json';
import guard2Json from '../assets/gfx/guard-2.json';
import guard3Json from '../assets/gfx/guard-3.json';
import guard4Json from '../assets/gfx/guard-4.json';
import guard5Json from '../assets/gfx/guard-5.json';
import guard6Json from '../assets/gfx/guard-6.json';
import guard7Json from '../assets/gfx/guard-7.json';
import fatguardJson from '../assets/gfx/fatguard.json';
import jaffarJson from '../assets/gfx/jaffar.json';
import skeletonJson from '../assets/gfx/skeleton.json';
import shadowJson from '../assets/gfx/shadow.json';
import dungeonJson from '../assets/gfx/dungeon.json';
import palaceJson from '../assets/gfx/palace.json';
import generalJson from '../assets/gfx/general.json';
import swordJson from '../assets/gfx/sword.json';
import titleJson from '../assets/gfx/title.json';
import cutsceneJson from '../assets/gfx/cutscene.json';
import kidPng from '../assets/gfx/kid.png';
import princessPng from '../assets/gfx/princess.png';
import vizierPng from '../assets/gfx/vizier.png';
import mousePng from '../assets/gfx/mouse.png';
import guard1Png from '../assets/gfx/guard-1.png';
import guard2Png from '../assets/gfx/guard-2.png';
import guard3Png from '../assets/gfx/guard-3.png';
import guard4Png from '../assets/gfx/guard-4.png';
import guard5Png from '../assets/gfx/guard-5.png';
import guard6Png from '../assets/gfx/guard-6.png';
import guard7Png from '../assets/gfx/guard-7.png';
import fatguardPng from '../assets/gfx/fatguard.png';
import jaffarPng from '../assets/gfx/jaffar.png';
import skeletonPng from '../assets/gfx/skeleton.png';
import shadowPng from '../assets/gfx/shadow.png';
import dungeonPng from '../assets/gfx/dungeon.png';
import palacePng from '../assets/gfx/palace.png';
import generalPng from '../assets/gfx/general.png';
import swordPng from '../assets/gfx/sword.png';
import titlePng from '../assets/gfx/title.png';
import cutscenePng from '../assets/gfx/cutscene.png';

let PrinceJS = window.PrinceJS;

PrinceJS.Preloader = function (game) {};

PrinceJS.Preloader.prototype = {
  preload: function () {
    this.text = this.game.add.bitmapText(
      PrinceJS.SCREEN_WIDTH * 0.5,
      PrinceJS.SCREEN_HEIGHT * 0.5,
      'font',
      'Loading. . . .',
      16,
    );
    this.text.anchor.setTo(0.5, 0.5);

    this.load.atlasJSONHash('kid', kidPng, kidJson);
    this.load.atlasJSONHash('princess', princessPng, princessJson);
    this.load.atlasJSONHash('vizier', vizierPng, vizierJson);
    this.load.atlasJSONHash('mouse', mousePng, mouseJson);
    this.load.atlasJSONHash('guard-1', guard1Png, guard1Json);
    this.load.atlasJSONHash('guard-2', guard2Png, guard2Json);
    this.load.atlasJSONHash('guard-3', guard3Png, guard3Json);
    this.load.atlasJSONHash('guard-4', guard4Png, guard4Json);
    this.load.atlasJSONHash('guard-5', guard5Png, guard5Json);
    this.load.atlasJSONHash('guard-6', guard6Png, guard6Json);
    this.load.atlasJSONHash('guard-7', guard7Png, guard7Json);
    this.load.atlasJSONHash('fatguard', fatguardPng, fatguardJson);
    this.load.atlasJSONHash('jaffar', jaffarPng, jaffarJson);
    this.load.atlasJSONHash('skeleton', skeletonPng, skeletonJson);
    this.load.atlasJSONHash('shadow', shadowPng, shadowJson);
    this.load.atlasJSONHash('dungeon', dungeonPng, dungeonJson);
    this.load.atlasJSONHash('palace', palacePng, palaceJson);
    this.load.atlasJSONHash('general', generalPng, generalJson);
    this.load.atlasJSONHash('sword', swordPng, swordJson);
    this.load.atlasJSONHash('title', titlePng, titleJson);
    this.load.atlasJSONHash('cutscene', cutscenePng, cutsceneJson);
    this.load.json('kid-anims', kidAnims);
    this.load.json('sword-anims', swordAnims);
    this.load.json('fighter-anims', fighterAnims);
    this.load.json('princess-anims', princessAnims);
    this.load.json('shadow-anims', shadowAnims);
    this.load.json('vizier-anims', vizierAnims);
    this.load.json('mouse-anims', mouseAnims);

    // Music
    this.game.load.audio('PrologueA', PrologueA);
    this.game.load.audio('PrologueB', PrologueB);
    this.game.load.audio('Danger', Danger);
    this.game.load.audio('Accident', Accident);
    this.game.load.audio('Potion1', Potion1);
    this.game.load.audio('Victory', Victory);
    this.game.load.audio('Prince', Prince);
    this.game.load.audio('Potion2', Potion2);

    // SFX
    this.game.load.audio('FreeFallLand', FreeFallLand);
    this.game.load.audio('LooseFloorLands', LooseFloorLands);
    this.game.load.audio('LooseFloorShakes1', LooseFloorShakes1);
    this.game.load.audio('GateComingDownSlow', GateComingDownSlow);
    this.game.load.audio('GateRising', GateRising);
    this.game.load.audio('GateReachesBottomClang', GateReachesBottomClang);
    this.game.load.audio('GateStopsAtTop', GateStopsAtTop);
    this.game.load.audio('BumpIntoWallSoft', BumpIntoWallSoft);
    this.game.load.audio('BumpIntoWallHard', BumpIntoWallHard);
    this.game.load.audio('SwordClash', SwordClash);
    this.game.load.audio('StabAir', StabAir);
    this.game.load.audio('StabOpponent', StabOpponent);
    this.game.load.audio('StabbedByOpponent', StabbedByOpponent);
    this.game.load.audio('MediumLandingOof', MediumLandingOof);
    this.game.load.audio('SoftLanding', SoftLanding);
    this.game.load.audio('UnsheatheSword', UnsheatheSword);
    this.game.load.audio('LooseFloorShakes3', LooseFloorShakes3);
    this.game.load.audio('LooseFloorShakes2', LooseFloorShakes2);
    this.game.load.audio('FloorButton', FloorButton);
    this.game.load.audio('Footsteps', Footsteps);
    this.game.load.audio('BonesLeapToLife', BonesLeapToLife);
    this.game.load.audio('Mirror', Mirror);
    this.game.load.audio('HalvedByChopper', HalvedByChopper);
    this.game.load.audio('SlicerBladesClash', SlicerBladesClash);
    this.game.load.audio('HardLandingSplat', HardLandingSplat);
    this.game.load.audio('ImpaledBySpikes', ImpaledBySpikes);
    this.game.load.audio('DoorSqueak', DoorSqueak);
    this.game.load.audio('FallingFloorLands', FallingFloorLands);
    this.game.load.audio('EntranceDoorCloses', EntranceDoorCloses);
    this.game.load.audio('ExitDoorOpening', ExitDoorOpening);
    this.game.load.audio('DrinkPotionGlugGlug', DrinkPotionGlugGlug);
    this.game.load.audio('Beep', Beep);
    this.game.load.audio('SpikedBySpikes', SpikedBySpikes);
  },

  create: function () {
    this.text.setText('Press to Start');

    this.input.keyboard.onDownCallback = this.start.bind(this);
    this.game.input.onDown.addOnce(() => {
      this.game.sound.context.resume();
    });

    this.game.input.mouse.capture = true;
    this.game.input.addPointer();
    this.game.input.addPointer();

    this.game.canvas.oncontextmenu = function (event) {
      event.preventDefault();
    };
  },

  update: function () {
    if (PrinceJS.Utils.pointerPressed(this.game)) {
      this.start();
    }
  },

  start: function () {
    if (PrinceJS.SKIP_TITLE) {
      this.state.start('Game');
    } else {
      this.state.start('Title');
    }
  },
};
