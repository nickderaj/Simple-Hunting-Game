# Hunting Boards Game

## Table of Contents

- [Description](#description)
- [Usage Information](#usage-information)
- [Contribution Guidelines](#contribution-guidelines)
- [Questions](#questions)
- [Images](#images)

## Description

This is a take on the coding challenge posted by kaizenx on GitHub: https://github.com/kaizenx/supahands-coding-test<br>
The pixel artwork is done by me and based on my 2 dogs, Loki & Jax<br>
A simple web-based game where there are two players who are going through a path hunting boards along the way. The player with the most number of boars hunted by the end wins.

## Usage Information

🎈 Players both start on node A with 3 Stamina.<br>
🏃‍♂️ Moving costs 1 Stamina, 😴 Resting returns 2 Stamina (max Stamina: 3)<br>
🤝 If both players are on the same tile, hunting costs 1 Stamina.
Otherwise it costs 2 Stamina.<br>
🔪 If both players are on the same tile, they will both get 1 point
assuming they both have 1 Stamina, otherwise only the active player
will - only costing the active player 1 Stamina.
<br>
🏆 The game ends when either player reaches node K or the number of
turns runs out. <br>
🐗 There are 3 boars on each tile (shown in the UI next to your
current position) and this number will decrease as you hunt <br>
👑 You can choose to work as a team and get as many points as possible
together, or go solo and try to beat your friend!

## Contribution Guidelines

Contribute freely

## Questions

If you have any questions, then feel free to contact me on the below:

- Github: [nickderaj](https://github.com/nickderaj)
- Email: [nickderaj@gmail.com](nickderaj@gmail.com)

## Images

| <img src=".\img\GameCharacters.png" width="500"> |
| :----------------------------------------: |
| **Figure 1.** _Characters Loki & Jax_ |

| <img src=".\img\GameInit.png" width="500"> |
| :----------------------------------------: |
| **Figure 1.** _Initialisation of the game_ |

| <img src=".\img\GameHelp.png" width="500"> |
| :----------------------------------------: |
|         **Figure 2.** _Help Menu_          |

| <img src=".\img\GameMove.png" width="500"> |
| :----------------------------------------: |
|     **Figure 3.** _Dynamic Move Query_     |

| <img src=".\img\GameDynamicUI.png" width="500"> |
| :---------------------------------------------: |
| **Figure 4.** _Both Players Tracked Separately_ |

|  <img src=".\img\GameNoBoars.png" width="500">  |
| :---------------------------------------------: |
| **Figure 5.** _Alert when hunting with 0 boars_ |

|      <img src=".\img\GameNoStamina.png" width="500">       |
| :--------------------------------------------------------: |
| **Figure 6.** _Alert when taking an action with 0 stamina_ |

| <img src=".\img\GameSwap.png" width="500"> |
| :----------------------------------------: |
|       **Figure 7.** _Character Swap_       |

| <img src=".\img\GameWinner.png" width="500"> |
| :------------------------------------------: |
|        **Figure 8.** _Winner Overlay_        |

|  <img src=".\img\GameMVC.png" width="500">  |
| :-----------------------------------------: |
| **Figure 9.** _Coded with MVC Architecture_ |

| <img src=".\img\GameMap.png" width="500"> |
| :---------------------------------------: |
|        **Figure 10.** _Travel Map_        |
