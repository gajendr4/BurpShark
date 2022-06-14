import PanelHeading from "../../../components/Panel/PanelHeading";
import TabGroup from "../../../components/Panel/TabGroup";
import Layout from "../../../components/Layout";
import { Key, ReactElement, useState } from "react";
import { MathpixMarkdown, MathpixLoader } from "mathpix-markdown-it";

const HeadLine = "KINEMATICS!";
var NameTabs = [
  {
    urlpath: "/mechanics/kinematics",
    tabname: "Theory",
  },
  {
    urlpath: "/mechanics/kinematics/questions",
    tabname: "Practice",
  },
];

function Theory() {
  const [embedURL] = useState(
    "https://drive.google.com/file/d/1ojIGsf8wccw_zOX7zPrgDttjTvOD4PqE/preview"
  );
  return (
    // REPLACE YOUR THEORY BY THE CONTENT & DESIRED MARKDOWN PREFERENCES
    <>
      <div style={{ background: "white" }}>
        <div
          style={{
            mixBlendMode: "difference",
          }}
        >
          <iframe src={embedURL} width="100%" style={{height: "70vh"}}></iframe>
        </div>
      </div>
    </>
  );
}

function Question() {
  var KinematicsSample = `\\section{KINEMATICS}

\\section{JEE 2023 by NITIN SACHAN}

1. A truck driver driving at $72 \\mathrm{~km} / \\mathrm{h}$ finds a red light $100 \\mathrm{~m}$ ahead of him. He instantly applies brakes to stop the truck. The truck retards uniformly and stops just at stop line of red light. How much time did the driver take to stop the truck?

Ans. $10 \\mathrm{~s}$

2. A particle moves with uniform acceleration and passes 600 metres in the 10th second and 720 metres in the 12 th second. Find the initial velocity of the particle.

Ans. $30 \\mathrm{~m} / \\mathrm{s}$

3. A train moving at the rate of $60 \\mathrm{~km} / \\mathrm{h}$, is brought to rest in 3 minutes by uniform retardation. Find the retardation and also the distance that the train travels before coming to rest.

$$
\\left(\\text { Ans. } \\frac{5}{54} \\mathrm{~m} / \\mathrm{s}^{2}, 1500 \\mathrm{~m}\\right)
$$

4. A body has a velocity of $25 \\mathrm{~m} / \\mathrm{s}$ at a certain instant. After $10 \\mathrm{~s}$ of that instant, velocity increases to $55 \\mathrm{~m} / \\mathrm{s}$. If the velocity changes uniformly, find the distance traveled.

(Ans. $400 \\mathrm{~m}$ )

5. A particle starts with a velocity of $10 \\mathrm{~cm} / \\mathrm{s}$ and travels $150 \\mathrm{~cm}$ in 30 seconds. Calculate the retardation of the particle.

Ans. $\\frac{1}{3} \\mathrm{~cm} / \\mathrm{s}^{2}$

6. The speed of a train is reduced from $36 \\mathrm{~km} / \\mathrm{h}$ to $9 \\mathrm{~km} / \\mathrm{h}$ while it travels a distance of $150 \\mathrm{~m}$. If the retardation be uniform, find how much further it will travel before coming to rest.

Ans. $10 \\mathrm{~m}$

7. A body is projected vertically upward with a velocity of $80 \\mathrm{~m} / \\mathrm{s}$. Find (i) how high it will go? and (ii) at what time will it be $96 \\mathrm{~m}$ above the point of projection?

Ans. $326.5 \\mathrm{~m}, 1.3 \\mathrm{~s}$ and $15 \\mathrm{~s}$

8. A stone is dropped into a well and sound of splash is heard after 4 seconds Assuming the velocity of sound to be $340 \\mathrm{~m} / \\mathrm{s}$; determine the depth of the well.

Ans. $70.38 \\mathrm{~m}$

9. A ball is thrown vertically upwards with a velocity of $30 \\mathrm{~m} / \\mathrm{s}$

(i) How high will it go? (ii) What time will it take to reach the highest point?

(iii) How fast will it be moving at the end of $2 \\mathrm{~s}$ ?

(iv) With what velocity will it, come back to the ground?

Ans. (i) $46 \\mathrm{~m}$ (ii) $3 \\mathrm{~s}($ iii) $10.4 \\mathrm{~m} / \\mathrm{s}$ (iv) $30 \\mathrm{~m} / \\mathrm{s}$

10. A particle is dropped from the top of a tower $200 \\mathrm{~m}$ high and another particle is projected at the same time vertically upwards from the foot of the tower so as to meet the first particle at a height of $56 \\mathrm{~m}$. Find the velocity of projection of the second particle.

Ans. $37 \\mathrm{~m} / \\mathrm{s}$

11. A stone is dropped from the roof of a house and falls past a window $6 \\mathrm{~m}$ high in $\\frac{1}{4}$ of a second. Find the height of the house above the window.

(Take $g=10$ $\\left.\\mathrm{m} / \\mathrm{s}^{2}\\right)$

Ans. $25.875 \\mathrm{~m}$

12. A particle falls freely from the top of a tower and during the last 2 seconds, it falls through $\\left(\\frac{3}{4}\\right)^{\\text {th }}$ of the height of the tower. Find the height of the tower.

Ans. $78.4 \\mathrm{~m}$

13. A freely falling particle, in the last second of its fall, passes through $5886 \\mathrm{~cm}$. Find the height from which it fell, and the time of its falling.

Ans. $207.24 \\mathrm{~m}, 6.5 \\mathrm{~s}$

14. $\\mathrm{A}, \\mathrm{B}, \\mathrm{C}$ and $\\mathrm{D}$ are points in a vertical line such that $\\mathrm{AB}=\\mathrm{BC}=\\mathrm{CD}$. If a body falls from rest from $A$, prove that the times of descending $A B, B C, C D$ are in the ratio:

$$
1: \\sqrt{2}-1: \\sqrt{3}-\\sqrt{2} \\text {. }
$$

15. A balloon is going up with uniform acceleration $\\left(\\frac{g}{8}\\right) \\mathrm{cm} / \\mathrm{s}^{2}$. After half a minute, a body is released from the balloon. Find the time in which the body will reach the ground.

Ans. $15 \\mathrm{~s}$

16. Two cars start off to race with velocities $u$ and $v$ and travel in a straight line with uniform acceleration $\\alpha$ and $\\beta$, respectively. If the race ends in a dead heat, prove that the length of the race course is 

$$
\\frac{2(u-v)(u \\beta-v \\alpha)}{(\\alpha-\\beta)^{2}}
$$

17. A point moving in a straight line with uniform acceleration describes $a$ and $b$ feet in successive intervals $t_{l}$ and $t_{2}$ second. Prove that the acceleration is $\\frac{2\\left(b t_{1}-a t_{2}\\right)}{t_{1} t_{2}\\left(t_{1}+t_{2}\\right)}$. Also, prove that if the point describes successive equal distances in times $t_{2}, t_{2}, t_{3}$, then $\\frac{1}{t_{1}}-\\frac{1}{t_{2}}+\\frac{1}{t_{3}}=\\frac{3}{t_{1}+t_{2}+t_{3}}$

18. If the coordinates of a point moving with constant acceleration be $x_{1}, x_{2}, x_{3}$ at the instants $t_{1}, t_{2}, t_{3}$, respectively, prove that the acceleration is

$$
\\frac{2\\left[\\left(x_{2}-x_{3}\\right) t_{1}+\\left(x_{3}-x_{1}\\right) t_{2}+\\left(x_{1}-x_{2}\\right) t_{3}\\right]}{\\left(t_{2}-t_{3}\\right)\\left(t_{3}-t_{1}\\right)\\left(t_{1}-t_{2}\\right)}
$$

19. Prove that for a particle moving with uniform acceleration $a$ in a straight line is give by $a=2\\left(\\frac{s^{\\prime}}{t^{\\prime}}-\\frac{s}{t}\\right)\\left(t+t^{\\prime}\\right)^{-1}$, Where $s$ and $s$ ' are the distances described during $t$ and $t^{\\prime}$ seconds, respectively.

20. Two particles $P, Q$ move along a straight line $A B$, starting from $A$. $P$ moves with velocity $u$ and acceleration $a$ and $Q$ moves with velocity $u^{\\prime}$ and acceleration $a^{\\prime}$. If they both have the same velocity at the middle point of $A B$, prove that

$$
\\mathrm{AB}=\\frac{u^{1^{2}}-u^{2}}{a-a^{\\prime}}
$$

21. A particle is projected vertically upward with a velocity $u \\mathrm{~m} / \\mathrm{s}$ and after seconds, another particle is projected upward from the same point with the same velocity. Prove that the particles will meet at a height $\\frac{4 u^{2}-g^{2} t^{2}}{8 g} \\mathrm{~m}$ after a time $\\left[\\frac{t}{2}+\\frac{u}{g}\\right]$ seconds from the start.

22. Two balls are projected simultaneously with the same velocity form the top of a tower, one vertically upward and the other vertically downward. If they reach the ground in times $t_{1}, t_{2}$, respectively, show that $\\sqrt{t_{1}, t_{2}}$ is the time which each will take to reach the ground if simply let fall freely from the top of the tower. 23. A particle falling from the top of the tower has travelled $x m$ when another particle is let fall freely from a point $y \\mathrm{~m}$ below the top. If they reach the ground together, show that the height of the tower is $\\frac{(x+y)^{2}}{4 x} \\mathrm{~m}$

24. A point moves with uniform acceleration. If $v_{1}, v_{2}, v_{3}$ be the average velocities in three successive intervals of time $t_{1}, t_{2}, t_{3}$, show that

$$
\\frac{\\left(v_{1}-v_{2}\\right)}{\\left(v_{2}-v_{3}\\right)}=\\frac{\\left(t_{1}+t_{2}\\right)}{\\left(t_{2}+t_{3}\\right)}
$$

25. If $a, b, c$ be the distances described by a particle, moving in a straight line with uniform acceleration, during the $p$ th,$q$ th and $r$ th second, respectively, prove that $a(q-r)+b(r-p)+c(p-q)=0$

26. A stone dropped into an empty pit of depth $h$ is heard to strike the bottom after $t$ seconds. Prove that $2 h\\left(1+\\frac{g t}{v}\\right)=g t^{2}$, where $v$, the velocity of sound, is so large in magnitude as compared to $h$ that $\\left(\\frac{h}{v}\\right)^{2}$ can be neglected.

27. A particle, projected vertically upward, takes $t$ seconds to reach a height $h \\mathrm{~m}$. If $t^{\\prime}$ seconds is the time from this point to the ground again, prove that $h=\\frac{1}{2} g t t^{\\prime}$ and that the maximum height is $\\frac{g\\left(t^{\\prime}+t\\right)^{2}}{r}$. Also show that the velocity of the particle at height $\\frac{1}{2} h$ is $\\frac{1}{2} g \\sqrt{t^{2}+t^{1^{2}}} \\mathrm{~m} / \\mathrm{s}$

28. A particle moves in a straight line with uniform acceleration and its distance from the origin $\\mathrm{O}$ on the line (not necessarily the position at $t=0$ ) at time $t_{1}, t_{2}, t_{3}$, are $d_{1}, d_{2}, d_{3}$, respectively. Prove that if $t_{1}, t_{2}, t_{3}$, are in A. P., whose common difference is $d$, and $d_{1}, d_{2}, d_{3}$ are in G.P., the acceleration is $\\frac{\\left(\\sqrt{d_{1}}-\\sqrt{d_{3}}\\right)^{2}}{d^{2}}$.

29. A particle leaves the origin with an initial velocity $\\vec{v}=(3.00 \\mathrm{i}) \\mathrm{m} / \\mathrm{s}$ and a constant acceleration $\\overrightarrow{\\mathrm{a}}=(-1.00 \\hat{i}-0.500 \\hat{j}) \\mathrm{m} / \\mathrm{s}^{2}$. When the particle reaches its maximum $x$ coordinate, what are (a) its velocity and (b) its position vector?

Ans. (a) $(-1.5$ $\\hat{j}) \\mathrm{m} / \\mathrm{s}(\\mathrm{b})(4.5 \\hat{i}-2.25 \\hat{j}) \\mathrm{m}$ 30. A particle starts from the origin at $t=0$ with a velocity of $8.0 \\hat{j} \\mathrm{~m} / \\mathrm{s}$ and moves in the $x y$ plane with a constant acceleration of $(4.0 \\hat{i}+2.0 \\hat{j}) \\mathrm{m} / \\mathrm{s}^{2}$. At the instant the particle's $x$ coordinate is $29 \\mathrm{~m}$, what are (a) its $y$-coordinate and (b) its speed?

Ans. (a) $45 \\mathrm{~m}$ (b) $22 \\mathrm{~m} / \\mathrm{s}$

31. At time $t=0$, the position vector of a particle moving in the $x-y$ plane is $\\vec{r}=5 \\hat{i}$ $\\mathrm{m}$. By time $t=0.02 \\mathrm{~s}$, its position vector has become $5.1 \\hat{\\mathrm{i}}+0.4 \\hat{\\mathrm{j}} \\mathrm{m}$ determine the magnitude $v_{a v}$ of the average velocity during this interval and the angle $\\theta$ made by the average velocity with the positive $x$-axis.

Ans. $20.6 \\mathrm{~m} / \\mathrm{s}, 76^{\\circ}$

32. A ball is shot from the ground into the air. At a height of $9.1 \\mathrm{~m}$, its velocity is observed to be $\\vec{v}=7.6 \\hat{i}+6.1 \\hat{j}$ in metres per second ( $\\hat{i}$ horizontal, $\\hat{j}$ upward). (a) To what maximum height does the ball rise? (b) What total horizontal distance does the ball travel? What are (c) the magnitude and $(\\mathrm{d})$ the direction of the ball's velocity just before it hits the ground?

Ans. (a) $11 \\mathrm{~m}$ (b) $23 \\mathrm{~m}$

(c) $17 \\mathrm{~m} / \\mathrm{s}(\\mathrm{d}) 63^{\\circ} \\mathrm{below}$ horizontal

33. A ball is thrown from the top of Qutub Minar $-200 \\mathrm{~m}-$ high with a velocity of $80 \\mathrm{~m} / \\mathrm{s}$ at an angel of $30^{\\circ}$ with the horizontal. Find the horizontal distance from the foot of the Minar to the point where it hits the ground.

Ans. $725.4 \\mathrm{~m}$

34. At a time $t$, the distance $x \\mathrm{~cm}$ of a particle moving in a straight is given by $x=4 \\mathrm{t}^{2}-$ 2t. Find the velocity and acceleration when $\\mathrm{t}=1.5 \\mathrm{~s}$.

Ans. $10 \\mathrm{~m} / \\mathrm{s}, 8 \\mathrm{~m} / \\mathrm{s}^{2}$

35. The position of a particle along a straight line is give by $x=\\left(t^{3}-9 t^{2}+15 t\\right) \\mathrm{m}$, here $t$ is in seconds. Determine its maximum acceleration and maximum velocity during the time interval $0 \\leq t \\leq 10 \\mathrm{~s}$

Ans. $42 \\mathrm{~m} / \\mathrm{s}^{2}, 135 \\mathrm{~m} / \\mathrm{s}$

36. A particle moves along a horizontal path such that its velocity is given by $v=\\left(3 t^{2}\\right.$ $-6 t) \\mathrm{m} / \\mathrm{s}$, where $t$ is the time in seconds. If it is initially located at the origin $O$, determine the distance travelled by the particle during the time interval $t=0$ to $t=3.5$ $s$, and the particle's average velocity and average speed during this time interval.

Ans. $14.1 \\mathrm{~m}, 1.75 \\mathrm{~m} / \\mathrm{s}, 4.03 \\mathrm{~m} / \\mathrm{s}$ 37. The acceleration of particle is given by $a(t)=\\left(3.00 \\mathrm{~m} / \\mathrm{s}^{2}\\right)-\\left(2.00 \\mathrm{~m} / \\mathrm{s}^{3}\\right) t$. (a) Find the initial speed $v_{0}$ such that the particle will have the same $x$-coordinate at $t=5.00 \\mathrm{~s}$ as it had $\\mathrm{at} \\mathrm{} \\mathrm{t}=0$. (b) What will be the velocity at $\\mathrm{t}=5.00 \\mathrm{~s} ?$

$$
\\text { Ans. (a) } 0.833 \\mathrm{~m} / \\mathrm{s}(\\mathrm{b})-9.17 \\mathrm{~m} / \\mathrm{s}
$$

38. The acceleration of a particle is defined by the relation $a=6 x-14$, where $a$ and $x$ are expressed in $\\mathrm{m} / \\mathrm{s}^{2}$ and metres, respectively. Knowing that $v=4 \\mathrm{~m} / \\mathrm{s}$ where $x=0$, determine (a) the maximum value of $x,(b)$ the velocity when the particle has travelled a total distance of $1 \\mathrm{~m} .$

Ans. (a) $0.667 \\mathrm{~m}$ (b) $2.71 \\mathrm{~m} / \\mathrm{s}$

39. If in the rectilinear motion of a particle, the time $t$ and position $x$ satisfy the equation $t$ $=a x^{2}+b x+c$, where $a, b, c$ are given constants, prove that

(i) The velocity in the position $x$ is $(2 a x+b)^{-1}$

(ii) The acceleration is inversely proportional to the cube of the distance from a certain fixed point in the line of motion, and find the position of the fixed point.

40. A particle moves along a straight line OX and its velocity $v$, when at a distance $x$ from $\\mathrm{O}$, is given by $v^{2}=12 x-3 x^{3}$. If $f$ is the acceleration when velocity is $v$, then show that $\\frac{81}{v^{4}}=8(6-f)(12-f)^{2}$

41. A body is projected vertically upward with a velocity $u$ : after time $t$, another body is projected vertically upward from the same point with velocity $v$, where $v<u$. If they meet as soon as possible, prove that

$$
t=\\frac{u-v+\\sqrt{u^{2}-v^{2}}}{g}
$$

42. Acceleration of a particle at any time $t$ is $\\vec{a}=\\left(2 t \\hat{\\mathrm{i}}+3 t^{2} \\hat{\\mathrm{j}}\\right) \\mathrm{m} / \\mathrm{s}^{2}$. If initially particle is at rest, find the velocity of the particle at time $t=2 \\mathrm{~s}$.

Ans. $(4 \\hat{i}+8 \\hat{j}) \\mathrm{m} / \\mathrm{s}$

43. The co-ordinates of a particle moving in $x-y$ plane at any time $t$ are $\\left(2 t, t^{2}\\right)$. Find (a) the trajectory of the particle (b) velocity of particle at time $t$ and (c) acceleration of particle at any time $t$.

Ans. (a) $x^{2}=4 y(b)(2 \\hat{i}+2 t \\hat{j})(\\mathrm{c}) 2 \\hat{j}$

44. A particle travels along the path defined by the parabola $y=0.5 x^{2}$. If the component of velocity

![](https://cdn.mathpix.com/cropped/2022_06_14_696543e63f45e69b5e02g-06.jpg?height=172&width=170&top_left_y=1402&top_left_x=893)
along the $x$-axis is $v_{x}=(5 t) \\mathrm{m} / \\mathrm{s}$, where $t$ is in seconds, determine the particle's distance from the origin $O$ and the magnitude of acceleration when $t=1 \\mathrm{~s} .$ When $t=0, x=0, y=0$.

Ans. $4 \\mathrm{~m}, 37.8 \\mathrm{~m} / \\mathrm{s}^{2}$

45. For $\\left(\\frac{1}{p}\\right)^{\\text {th }}$ of the distance between two station, a train is uniformly accelerated and for $\\left(\\frac{1}{q}\\right)^{\\text {th }}$ of the distance it is uniformly retarded. It starts at rest from one station and comes to rest at another. Prove that the ratio of the greatest velocity to its average velocity is

$$
1+\\left(\\frac{1}{p}\\right)+\\left(\\frac{1}{q}\\right): 1
$$

46. A train travels from rest at $\\mathrm{O}$ and comes to rest at $\\mathrm{C}$. From $\\mathrm{O}$ to $\\mathrm{A}$, there is a constant acceleration and at $\\mathrm{A}$ the velocity is $\\mathrm{V}$. From $\\mathrm{A}$ to $\\mathrm{B}$, the train moves with uniform velocity V, and finally, from B to C, there is constant retardation. The distances OA, $\\mathrm{OC}$ and $\\mathrm{BC}$ are $a, c$ and $b$, respectively. Show that the time of journey from $\\mathrm{O}$ to $\\mathrm{C}$ is $\\frac{(a+b+c)}{V}$

47. The $v$-s graph for an airplane traveling on straight run-way is shown. Determine the acceleration of the plane at $s=50 \\mathrm{~m}$ and $s$ $150 \\mathrm{~m}$. Draw the $a$-s graph.

Ans. $8 \\mathrm{~m} / \\mathrm{s}^{2}, 4.5 \\mathrm{~m} / \\mathrm{s}^{2}$

48. The jet plane starts from rest at $\\mathrm{s}=0$ and is subjected to the acceleration shown. Determine the speed of the plane when it has travelled $60 \\mathrm{~m}$.

![](https://cdn.mathpix.com/cropped/2022_06_14_696543e63f45e69b5e02g-07.jpg?height=250&width=514&top_left_y=1255&top_left_x=184)

Ans. $46.47 \\mathrm{~m} / \\mathrm{s}$

49. The acceleration of particle varies with time as shown.

(a) Find an expression for velocity in terms of $t$.

(b) Calculate the displacement of the particle in the interval from $t=2 s$ to $t=4 s$. Assume that $\\mathrm{v}=0$ at $t=0$.
![](https://cdn.mathpix.com/cropped/2022_06_14_696543e63f45e69b5e02g-08.jpg?height=286&width=212&top_left_y=364&top_left_x=438)

Ans. (a) $\\left(t^{2}-2 t\\right)$ (b) $\\frac{20}{3} \\mathrm{~m}$

50. Particle 1 is subjected to an acceleration $a=-k v$, particle 2 is subjected to $a=-$ $k t$, and particle 3 is subjected to $a=-k s$. All three particles start at the origin $s=0$ with an initial velocity $v_{0}=10 \\mathrm{~m} / \\mathrm{s}$ at time $t=0$, and the magnitude of $k$ is $0.1$ for all three particles (note that the units of $k$ vary from case to case). Plot the position, velocity, and acceleration versus time for each particle over the range $0 \\leq t \\leq 10 s$.

51. A steamer takes a time $t_{1}$ to travel a distance $d$ up a river and time $t_{2}$ to return. Prove that the speed of the steamer is $d\\left(t_{1}+t_{2}\\right) /\\left(2 t_{1} t_{2}\\right)$

52. A man rows a boat directly across a river in time $t$, and rows an equal distance up the stream in time $\\mathrm{T}$. Prove that the speed of boat in still water, bears to speed of stream the $\\operatorname{ratio}\\left(\\mathrm{T}^{2}-t^{2}\\right):\\left(\\mathrm{T}^{2}+t^{2}\\right)$

53. A man rows across a floating river in time $t_{1}$ and rows an equal distance down the stream in time $t_{2}$. If $u$ be the velocity of man in still water and $v$ that of the stream, show that $t_{1}: t_{2}=\\sqrt{u+v}: \\sqrt{u-v}$ 54. A motor boat going downstream overcame a raft at point $A$. After one hour it turned back and met the raft again at a distance $6 \\mathrm{~km}$ from point $A$. Find the river velocity.

Ans. $3 \\mathrm{~km} / \\mathrm{h}$

55. Car A and car B start moving simultaneously in the same direction along the line joining them. Car A with a constant acceleration $a=4 \\mathrm{~m} / \\mathrm{s}^{2}$, while car B moves with a constant velocity $v=1 \\mathrm{~m} / \\mathrm{s}$. At time $t=0$, car A is $10 \\mathrm{~m}$ behind car B. find the time when car A overtakes car B.

Ans. $2.5$ second

56. An elevator car whose floor to ceiling distance is equal to $2.7 \\mathrm{~m}$ starts ascending with constant acceleration $1.2 \\mathrm{~m} / \\mathrm{s}^{2} .2$ second after the start a bolt begins falling from the ceiling of the car. Find:

(a) the time after which bolt hits the floor of the elevator.

(b) the net displacement and distance travelled by the bolt, with respect to earth. (Take $g=9.8 \\mathrm{~m} / \\mathrm{s}^{2}$ )

Ans. (a) $0.7$ Second (b) $0.72 \\mathrm{~m}, 1.3 \\mathrm{~m}$

57. The driver of a car wishes to pass a truck that is traveling at a constant speed of $20.0 \\mathrm{~m} / \\mathrm{s}$. Initially, the car is also traveling at $20.0 \\mathrm{~m} / \\mathrm{s}$. Initially, the vehicles are separated by $25.0$ $\\mathrm{m}$, and the car pulls back into the truck's lane after it is $25.0 \\mathrm{~m}$ ahead of the truck. The car is $5.0 \\mathrm{~m}$ long and the truck is $20.0 \\mathrm{~m}$ long. The car's acceleration is a constant $0.600$ $\\mathrm{m} / \\mathrm{s}^{2}$. (a) How much time is required for the car to pass the truck? (b) What distance does the car travel during this? (c) What is the final speed of the car?

Ans. (a) $15.8 \\mathrm{sec}$, (b) $391 \\mathrm{~m}$ (c) $29.5 \\mathrm{~m} / \\mathrm{s}$

58. An elevator without a ceiling is ascending with a constant speed of $10 \\mathrm{~m} / \\mathrm{s}$. A boy on the elevator shoots a ball directly upward, from a height of $2.0 \\mathrm{~m}$ above the elevator floor, just as the elevator floor is $28 \\mathrm{~m}$ above the ground, The initial speed of the ball with respect to the elevator is $20 \\mathrm{~m} / \\mathrm{s}$. (a) What maximum height above the ground does the ball reach? (b) How long does the ball take to return to the elevator floor?

Ans. (a) $76 \\mathrm{~m}$ (b) $4.2 \\mathrm{sec}$.

59. A ball is thrown vertically upward from the $12 \\mathrm{~m}$ level in an elevator shaft with an initial velocity of $18 \\mathrm{~m} / \\mathrm{s}$. At the same instant an open platform elevator passes the $5 \\mathrm{~m}$ level, moving upward with a constant velocity of $2 \\mathrm{~m} / \\mathrm{s}$. Determine (a) when and where the ball will hit the elevator, (b) the relative velocity of the ball with respect to the ball with respect to the elevator when the ball hits the elevator.

Ans. (a) $3.65 \\mathrm{~s}$ (b) $12.30 \\mathrm{~m}$.

60. A train of length $l=348 \\mathrm{~m}$ moving rectilinearly with constant acceleration $a=3 \\times$ $10^{-2} \\mathrm{~m} / \\mathrm{s}^{2}$. After 30 second a ball is dropped by the driver (event 1 ) and after 60 second another ball is dropped by the guard (event 2). How and at what constant velocity $v$ should a motorist move parallel to the train so that he observes both the events to occur in front of him. Neglect the length of the motor.

Ans. $4 \\mathrm{~m} / \\mathrm{s}$

61. An automobile and a truck start from rest at the same instant, with the automobile initially at some distance behind the truck. The truck has a constant acceleration of $2.2$ $\\mathrm{m} / \\mathrm{s}^{2}$ and the automobile has an acceleration of $3.5 \\mathrm{~m} / \\mathrm{s}^{2}$. The automobile overtakes the truck after the truck has moved $60 \\mathrm{~m}$.

(c) How much time does it takes the automobile to overtake the truck.

(d) How far was the automobile behind the truck initially.

(e) What is the speed of each when they are next each other.

Ans.(a) $7.39 \\mathrm{sec}$ (b) $35.5 \\mathrm{~m}$ (c) automobile $25.9 \\mathrm{~m} / \\mathrm{s}$ truck $16.2 \\mathrm{~m} / \\mathrm{s}$

62. Two ships each moving with a velocity of $15 \\mathrm{~km} / \\mathrm{h}$ try to cross a river of breadth $1.5 \\mathrm{~km}$ running with a velocity of $9 \\mathrm{~km} / \\mathrm{h}$. One ship crosses the river by the shortest path and the other in the shortest time. If they start together, find the interval between their times of arriving at the opposite bank.

Ans. $1.5 \\min$.

63. A man swims with constant velocity. He takes time $t_{1}$ to swim across a river in still water and time $t_{2}$ to cross the river when the river is flowing. If $b$ is width of the river, show that velocity of the river is $\\frac{b}{t_{1} t_{2}} \\sqrt{t_{2}^{2}-t_{1}^{2}}$.

64. A man car row a boat in still water at $3 \\mathrm{~km} / \\mathrm{h}$. He can walk at a speed of $5 \\mathrm{~km} / \\mathrm{h}$ on the shore. The water in the river flows at $2 \\mathrm{~km} / \\mathrm{h}$. If the man rows across the river and walks along the shore to reach the opposite point on the river bank, find the direction in which he should row the boat so that he could reach the opposite shore in the least possible time. Also calculate this time. The width of the river is $500 \\mathrm{~m}$.

Ans. $20 \\sqrt{2} \\mathrm{~h} .$

65. Show that the dirction of shortest route is at right angles to the river when the velocity of boat with respect to water $v$ is greater than that of the river velocity $u$ and in opposite case it is $\\tan ^{-1} \\frac{v}{\\sqrt{u^{2}-v^{2}}}$

66. A swimmer wishes to cross a $500 \\mathrm{~m}$ wide river flowing at $5 \\mathrm{~km} / \\mathrm{h}$. His speed with respect to water is $3 \\mathrm{~km} / \\mathrm{h}$. (a) If he heads in a direction making an angle $\\theta$ with the flow, find the time he takes to cross the river. (b) Find the shortest possible time to cross the river.

Ans. (a) $\\frac{10}{\\sin \\theta} \\min$ (b) $10 \\min$. 67. A launch plies between two points $A$ and $B$ on the opposite banks of a river always following the line $A B$. The distance $\\mathrm{S}$ between points $A$ and $B$ is $1,200 \\mathrm{~m}$. The velocity of the river current $v=1.9 \\mathrm{~m} / \\mathrm{s}$ is constant over the entire width of the river. The line $A B$ makes an angle $\\alpha=60^{\\circ}$ with the direction of the current. With what velocity $u$ and at what angle $\\beta$ to the line $A B$ should the launch move to cover the distance $A B$ and back in a time $t=5$ min? The angle $\\beta$ remains the same during the passage from $A$ to $B$ and from $B \\operatorname{to} A$

![](https://cdn.mathpix.com/cropped/2022_06_14_696543e63f45e69b5e02g-11.jpg?height=264&width=342&top_left_y=405&top_left_x=340)

Ans. $u=8 \\mathrm{~m} / \\mathrm{s}, \\beta=12^{\\circ}$

68. To a man walking at the rate of $3 \\mathrm{~km} / \\mathrm{hr}$ the rain appears to fall vertically. When he increases his speed to $6 \\mathrm{~km} / \\mathrm{hr}$ it appears to meet him at an angle of $45^{\\circ}$ with vertical. Find the speed of rain.

Ans. $3 \\sqrt{2} \\mathrm{~km} / \\mathrm{h}$

69. One ship sailing east, with a speed of $15 \\mathrm{~km}$ per hour, passes a certain point at 12 noon; and a second ship, sailing north at the same speed, passes the same point at $1.30$ $\\mathrm{pm}$ At what time are they closest together, and what is the distance between them?

Ans. $12: 45 \\mathrm{pm}, 15.9 \\mathrm{~km}$.

70. A destroyer streaming north at the rate of $24 \\mathrm{~km} / \\mathrm{h}$ observes a sea-plane carrier due east of itself at a distance of $16 \\mathrm{~km}$, the latter streaming due west at the rate of $32 \\mathrm{~km} / \\mathrm{h}$. After what time are they at the least distance from one another and what is this least distance?

Ans. $19.2 \\mathrm{~min}, 9.6 \\mathrm{~km}$

71. Two ships $A$ and $B$ are $10 \\mathrm{~km}$ apart on a line running south to north. Ship $A$ farther north is streaming west at $20 \\mathrm{~km} / \\mathrm{hr}$ and ship $B$ is streaming north $20 \\mathrm{~km} / \\mathrm{hr}$. What is their distance of closest approach and how long do they take to reach it?

Ans. $15 \\min$

72. $A \\operatorname{ship} A$ is travelling due east at $10 \\mathrm{~km} / \\mathrm{hr}$ and at 9 A.M. is $30 \\mathrm{~km}$ south-west of another ship $B$. If $B$ travels at $15 \\mathrm{~km} /$ hr so as to intercept $A$ calculate.

(f) the direction in which B must travel

(g) the time it takes when the interception takes place. 73. Two particles $A$ and $B$ move with constant velocities $v_{1}$ and $v_{2}$ along two mutually perpendicular straight lines towards the intersection point $O$. At moment $t=0$ the particles were located at distances $l_{1}$ and $l_{2}$ from $O$ respectively. Find the time when they are nearest and also this shortest distance.

$$
\\text { Ans. } \\frac{l_{1} v_{1}+l_{2} v_{2}}{v_{1}^{2}+v_{2}^{2}}, \\frac{l_{1} v_{2}-l_{2} v_{1}}{\\sqrt{v_{1}^{2}+v_{2}^{2}}}
$$

74. Two straight railways converge to a level crossing at an angel $\\alpha$, and two trains are moving towards the crossing with velocities $u$ and $v$. If $a$ and $b$ are the initial distances of the trains of the trains from the crossing, show that their least distance apart will be

$$
\\frac{(a v-b u) \\sin \\alpha}{\\sqrt{u^{2}+v^{2}-2 u v \\cos \\alpha}}
$$

75. Point $A$ moves uniformly with velocity $v$ so that the vector $v$ is continually "aimed" at point $B$ which in its turn moves rectilinearly and uniformly with velocity $u<v$. At the initial moment of time $\\overrightarrow{\\mathrm{V}} \\perp \\overrightarrow{\\mathrm{u}}$ and the points are separated by a distance $l$. How soon the points converge?

76. Figure shows a small mass $m$ hanging over a pulley. The other end of the thread is being pulled in horizontal direction with a uniform speed $u$. Find the speed with which the mass ascend at the instant the string makes an angle $\\theta$ with the horizontal.

![](https://cdn.mathpix.com/cropped/2022_06_14_696543e63f45e69b5e02g-12.jpg?height=276&width=322&top_left_y=847&top_left_x=306)

Ans. $[u \\cos \\theta]$

77. Find the speed of the block $B$ when the wedges $A$ and $C$ are moving toward each other with speed $v$ and the strings connected to block make an angle $\\theta$ with the vertical, as shown in figure

![](https://cdn.mathpix.com/cropped/2022_06_14_696543e63f45e69b5e02g-12.jpg?height=190&width=382&top_left_y=1272&top_left_x=396)



$$
\\text { Ans. }\\left[v_{B}=\\frac{v(1-\\sin \\theta)}{\\cos \\theta}\\right]
$$

78. Find the speed of the box-3, if box-1 and box-2 are moving with speed $v_{1}$ and $v_{2}$ as shown in figure when the string makes an angle $\\theta_{1}$ and $\\theta_{2}$ with the horizontal at its left and right end.

![](https://cdn.mathpix.com/cropped/2022_06_14_696543e63f45e69b5e02g-13.jpg?height=162&width=562&top_left_y=352&top_left_x=264)

$$
\\text { Ans. }\\left[\\frac{\\left(v_{1}+v_{2}\\right) \\cos \\theta_{1}}{\\cos \\theta_{2}}-v_{2}\\right]
$$

79. Figure shows a pulley over which a string passes and connected to two masses $A$ and $B$. Pulley moves up with a velocity $v_{P}$ and mass $B$ is also going up at a velocity $v_{B}$. Find the velocity of mass $A$ if:

(a) $v_{P}=5 \\mathrm{~m} / \\mathrm{s}$ and $v_{B}=10 \\mathrm{~m} / \\mathrm{s}$ (b) $v_{P}=5 \\mathrm{~m} / \\mathrm{s}$ and $v_{B}=20 \\mathrm{~m} / \\mathrm{s}$

![](https://cdn.mathpix.com/cropped/2022_06_14_696543e63f45e69b5e02g-13.jpg?height=328&width=128&top_left_y=806&top_left_x=326)

Ans. $[(a) 0 \\mathrm{~m} / \\mathrm{s}$ (b) $30 \\mathrm{~m} / \\mathrm{s}]$

80. Block $C$ shown if figure is going down at acceleration $2 \\mathrm{~m} / \\mathrm{s}^{2}$. Find the accelerations of blocks $A$ and $B$.

![](https://cdn.mathpix.com/cropped/2022_06_14_696543e63f45e69b5e02g-13.jpg?height=188&width=414&top_left_y=1273&top_left_x=264)

Ans. $a_{A}=1.5 \\mathrm{~m} / \\mathrm{s}^{2}, a_{B}=2 \\mathrm{~m} / \\mathrm{s}^{2}$

![](https://cdn.mathpix.com/cropped/2022_06_14_696543e63f45e69b5e02g-14.jpg?height=360&width=254&top_left_y=210&top_left_x=836)

81. Figure shows a system of four pulleys with two masses $A$ B. Find, at an instant:

(h) Speed of block $A$ when the block $B$ is going up at 1 and pulley $Y$ is going up at $2 \\mathrm{~m} / \\mathrm{s}$.

(i) Acceleration of block $A$ if block $B$ is going up at 3 and pulley $Y$ is going down at $1 \\mathrm{~m} / \\mathrm{s}^{2}$.

Ans. (a) Zero, (b) $3.5 \\mathrm{~m} / \\mathrm{s}^{2}$

82. Block $B$ shown in figure moves to the right with a constant velocity of $30 \\mathrm{~cm} / \\mathrm{s}$. Find:

(j) the velocity of block $A$

(k) the velocity of the point $P$ of the string.

(1) the velocity of the point $M$ of the string

(m) the relative velocity of the point $P$ of the string with respect to the block $A$.

Ans. [(a) $20 \\mathrm{~cm} / \\mathrm{s}$ right, (b) $60 \\mathrm{~cm} / \\mathrm{s}$ right, (c) $2 \\mathrm{~cm} / \\mathrm{s}$ left, (d) $40 \\mathrm{~cm} / \\mathrm{s}$ right $]$

83. Find the relation among accelerations of wedge $A$ and the rod $B$ supported on wedge $A$. Rod $B$ is restricted to move vertically by two fixed wall corners shown in figure.

![](https://cdn.mathpix.com/cropped/2022_06_14_696543e63f45e69b5e02g-14.jpg?height=272&width=342&top_left_y=1134&top_left_x=283)

Ans. $a_{B}=a_{A} \\tan \\theta$ 84. Figure shows a block $A$ constrained to slide along the incline plane of the wedge $B$ shown. Block $A$ is attached with a string which passes through three ideal pulleys and connected to the wedge $B$. If wedge is pulled toward right with an acceleration $a_{1}$.

(n) Find the acceleration of the block with respect to wedge.

(o) Find the acceleration of the block with respect to ground.

![](https://cdn.mathpix.com/cropped/2022_06_14_696543e63f45e69b5e02g-15.jpg?height=212&width=340&top_left_y=298&top_left_x=283)

Ans. (a) $2 a_{1}$, (b) $a_{1}(\\sqrt{5-4 \\cos \\theta})$

85.Find the acceleration of the block $B$ as shown in figure (a) and (b) relative to the block $A$ and relative to ground if the block $A$ is moving toward left with acceleration $a$.

![](https://cdn.mathpix.com/cropped/2022_06_14_696543e63f45e69b5e02g-15.jpg?height=198&width=344&top_left_y=680&top_left_x=235)

(a)

![](https://cdn.mathpix.com/cropped/2022_06_14_696543e63f45e69b5e02g-15.jpg?height=168&width=314&top_left_y=708&top_left_x=680)

(b)

Ans. [(a) $a_{B A}=2 a \\quad a_{B G}=a$ (b) $\\left.a_{B A}=3 a \\quad a_{B G}=a \\sqrt{10+6 \\cos \\theta}\\right]$

86. The horizontal range of a projectile is $4 \\sqrt{3}$ time its maximum height. Find the angle of projection.

Ans. $30^{\\circ}$

87. A man can throw a stone to a maximum distance of $125 \\mathrm{~m}$. For how much time will it remain in air and up to what height will it rise?

Ans. $5.05 \\mathrm{sec}, 31.25 \\mathrm{~m}$

88. Prove that if the time of flight of a bullet over a horizontal range $R$ is $T$ seconds, then the inclination of the direction of projection to the horizontal is

$$
\\tan ^{-1}\\left(\\frac{g \\mathrm{~T}^{2}}{2 \\mathrm{R}}\\right) .
$$

89. If $\\mathrm{R}$ be the horizontal range of the particle and $h$ be the greatest height, prove that the initial velocity of the particle is 

$$
\\left[2 g\\left(h+\\left(\\frac{\\mathrm{R}^{2}}{4 h}\\right)\\right]^{\\frac{1}{2}}\\right.
$$

90. The velocity of a particle when at its greatest height is $\\sqrt{\\frac{2}{3}}$ of its velocity when half at its greatest height. Find the angle of projection.

Ans. 450

91. Find the greatest distance that a stone can be thrown inside a horizontal tunnel $10 \\mathrm{~m}$ high, with a velocity of projection $70 \\mathrm{~m} / \\mathrm{s}$. Find also the corresponding time of flight.

Ans. $80 \\sqrt{6} \\mathrm{~m} ; 2.85 \\mathrm{sce}$

92. A particle is projected so as to graze the top of two walls, each of height $10 \\mathrm{~m}$, at $15 \\mathrm{~m}$ and $45 \\mathrm{~m}$, respectively from the point of projection. Find the angle of projection.

Ans. $\\tan ^{-1}\\left(\\frac{8}{9}\\right)$

93. A particle just clears a wall of height $b$ at a distance $a$ and strikes the ground at a distance $c$ from the point of projection. Prove that the angle of projection is

$$
\\tan ^{-1} \\frac{b c}{a(c-a)}
$$

and the velocity of projection $\\mathrm{V}$ is given by $\\frac{2 \\mathrm{~V}^{2}}{g}=\\frac{a^{2}(c-a)^{2}+b^{2} c^{2}}{a b(c-a)}$

94. A particle is projected with a velocity $u$ so as just pass the highest possible post a horizontal distance $d$ from the point of projection O. Prove that the greatest height above O attained by the particle in its flight is $\\frac{u^{6}}{2 g\\left(u^{4}+g^{2} d^{2}\\right)}$

95. A particle is projected with a velocity $2 \\sqrt{a g}$ so that it just clears two walls of equal height $a$ and which are at a distance $2 a$ from each other. Show that the time of passing between the walls is $2 \\sqrt{\\frac{a}{g}}$.

96. A bird flies in a straight line with uniform velocity $\\mathrm{V}$ in an upward direction making an angle $\\theta$ with the horizontal. At the instant when the bird is at a height $h$ vertically above a boy on the ground, the boy throws a stone at an angle of elevation $\\alpha$. Show that, whatever be the velocity of projection, the stone cannot hit the bird unless 

$$
\\tan \\alpha \\geq\\left\\{\\tan \\theta+\\left(\\frac{\\sqrt{2 g h}}{V \\cos \\theta}\\right)\\right\\} .
$$

97. A particle is thrown over a triangle from one end of a horizontal base and touching the vertex falls on the other end of the base. If $\\mathrm{A}, \\mathrm{B}$ be the base angles and $\\alpha$ the angle of projection, then prove that $\\tan \\alpha=\\tan \\mathrm{A}+\\tan \\mathrm{B}$.

98. A stone is projected with velocity $u$ from a height $h$ to hit a point on the ground level at a horizontal distance $\\mathrm{R}$ from the point of projection. Show that the angle of projection $\\alpha$ is given by

$$
\\mathrm{R}^{2} \\tan ^{2} \\alpha-\\frac{2 u^{2}}{g} \\tan \\alpha+\\mathrm{R}^{2}-\\frac{2 h u^{2}}{g}=0 .
$$

Deduce that the maximum range $\\mathrm{R}^{\\prime}$ for this velocity of projection on the ground level is

$$
\\sqrt{\\frac{u^{4}}{g^{2}}+\\frac{2 h u^{2}}{g}},
$$

99. A projectile started from $\\mathrm{O}$ at an elevation $\\alpha$. After $t$ seconds, its position appeared to be at an elevation $\\beta$ as seen from O. Prove that the initial velocity was

$$
\\frac{g t \\cos \\beta}{2 \\sin (\\alpha-\\beta)}
$$

100. A particle is to be projected so as to just pass through three rings of diameter $d$, placed in parallel vertical planes at distances $a$ apart, with their highest points in a horizontal straight line at a height $h$ above the point of projection. Prove that the elevation of projection must be

$$
\\tan ^{-1}\\left\\{\\frac{2 \\sqrt{h d}}{a}\\right\\}
$$

101. Two bodies are projected from the same point with equal speeds in such directions that they both strike the same point on a plane whose inclination is $\\beta$. If $\\alpha$ be the angle of projection of the first body with the horizontal show that the ratio of their times of fight is

$$
\\frac{\\sin (\\alpha-\\beta)}{\\cos \\alpha}
$$

102. A heavy particle is projected from a point at the foot of a fixed plane, inclined at an angle $45^{\\circ}$ to the horizontal, in the vertical plane containing the line of greatest slope through the point. If $\\phi\\left(>45^{\\circ}\\right)$ is the inclination to the horizontal of the initial direction of projection, for what value of $\\tan \\phi$ will the particle strike the plane?

(i) horizontally

(ii) at right angle

Ans. (i) 2 (ii) 3

103. A projectile is fired with a velocity $u$ at right angles to the slope, which is inclined at an angle $\\theta$ with the horizontal. Derive an expression for the distance $R$ to the point of impact.

![](https://cdn.mathpix.com/cropped/2022_06_14_696543e63f45e69b5e02g-18.jpg?height=254&width=280&top_left_y=524&top_left_x=313)

Ans. $\\frac{2 u^{2}}{g} \\tan \\theta \\sec \\theta$

104. A particle $A$ is projected with an initial velocity of $60 \\mathrm{~m} / \\mathrm{s}$ at an angle $30^{\\circ}$ to the horizontal. At the same time a second particle $B$ is projected in opposite direction with initial speed of $50 \\mathrm{~m} / \\mathrm{s}$ from a point at a distance of $10 \\mathrm{~m}$ from $A$. If the particles collide in air, find (a) the angle of projection $\\alpha$ of particle $B$ (b) time when the collision takes place and (c) the distance of $P$ from $A$. where collision occurs. $\\left(\\mathrm{g}=10 \\mathrm{~m} / \\mathrm{s}^{2}\\right)$

![](https://cdn.mathpix.com/cropped/2022_06_14_696543e63f45e69b5e02g-18.jpg?height=174&width=556&top_left_y=1118&top_left_x=255)

Ans. (a) $\\sin ^{-1}\\left(\\frac{3}{5}\\right)$, (b) $1.09 \\mathrm{sec}$, (c) $62.64 \\mathrm{~m}$ 105. Two particles are projected from a point at the same instant with velocities whose horizontal and vertical components are $u_{1}, v_{1}$ and $u_{2}, v_{2}$ respectively. Prove that the interval between their passing through the other common point is:

$$
\\frac{2\\left(v_{1} u_{2}-v_{2} u_{1}\\right)}{g\\left(u_{1}+u_{2}\\right)}
$$

106. At any instant, a particle is moving with a velocity $u$ in a direction making an angle $\\alpha$ with the horizon. After a certain interval $t$, the direction of its path makes an angle $\\beta$ with the horizontal direction. Prove that $u \\cos \\alpha=\\frac{g t}{\\tan \\alpha-\\tan \\beta}$. Also, prove that the direction of motion turns through an angle $\\theta$ in time $\\frac{u \\sin \\theta}{g \\cos (\\theta-\\alpha)}$ and that the direction of motion will be at right angles to the former direction in time $\\left(\\frac{u}{g \\sin \\alpha}\\right)$

107. A particle is projected with velocity $u$ at an elevation $\\alpha$. Prove that if $h<\\frac{u^{2} \\sin ^{2} \\alpha}{2 g}$ the particle will be again at height $h$ after a time $\\frac{2}{5} \\sqrt{u^{2} \\sin ^{2} \\alpha-2 g h}$, after being at the same height the first time.

108. A stone is projected with velocity $v$ and elevation $\\theta$ from a point $\\mathrm{O}$ on level ground so as to hit a point $P$ on a wall whose distance from $\\mathrm{O}$ is $a$, the height $P$ above the ground level being $b$. Prove that $2 v^{2}\\left(a \\sin \\theta \\cos \\theta-b \\cos ^{2} \\theta\\right)=g a^{2}$.

109. A particle is projected so as to have a range $\\mathrm{R}$ on the horizontal plane through the point of projection. If $\\alpha, \\beta$ are the possible angles of projection and $t_{1}, t_{2}$ the corresponding times of flight, show that $\\frac{t_{1}^{2}-t_{2}^{2}}{t_{1}^{2}+t_{2}^{2}}=\\frac{\\sin (\\alpha-\\beta)}{\\sin (\\alpha+\\beta)}$

110. A gun fires a shell with initial muzzle velocity $u$. Show that the farthest horizontal distance at which an aeroplane at height $h$ can be hit is $\\frac{u}{g} \\sqrt{u^{2}-2 g h}$, and the gun's elevation then is $\\tan ^{-1}\\left(\\frac{u}{\\sqrt{u^{2}-2 g h}}\\right)$. `;

  return (
    // REPLACE YOUR QUESTION BY THE CONTENT & DESIRED MARKDOWN PREFERENCES
    <div style={{ fontSize: "1.3rem" }}>
      <MathpixLoader>
        <MathpixMarkdown text={KinematicsSample} />
      </MathpixLoader>
    </div>
  );
}

var subContent = [<Theory key={1} />, <Question key={2} />];

type Props = {
  subindex: Key;
};

const PanelExp = ({ subindex }: Props) => {
  return (
    <div>
      <PanelHeading>{HeadLine}</PanelHeading>
      <TabGroup
        tabsTitle={NameTabs}
        tabsPanelobject={subContent}
        defIndex={subindex}
      ></TabGroup>
    </div>
  );
};

export { PanelExp };

export default function kinematics() {
  return (
    <>
      <PanelExp subindex={0} />
    </>
  );
}

kinematics.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
