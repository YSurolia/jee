// Lesson: Kinematics. Format is described in README.md ("Lessons").
var R = String.raw;
JEE.lesson('physics', 'kinematics', {
  theory: [
    { h: R`What does "moving" really mean?`,
      body: [
        R`Kinematics is the part of physics that <b>describes</b> motion: where something is, how fast it goes and how its speed changes. It does not ask <i>why</i> it moves; that comes in Laws of Motion.`,
        R`An object is moving if its position changes with time. But position is always measured <b>from somewhere</b>. That "somewhere", together with a set of axes and a clock, is called a <b>frame of reference</b>.`,
        R`So the same object can be moving in one frame and at rest in another. Motion is <b>relative</b>.`
      ],
      analogy: R`You are sitting in a moving train. To the person next to you, you are at rest. To someone standing on the platform, you are rushing past at 80 km/h. Both are right, because each is using a different frame of reference.`,
      points: [R`Always ask "moving with respect to what?"`, R`In JEE problems the ground is the usual frame unless something else is stated.`],
      check: { q: R`A bird sits on the roof of a moving bus. Is it at rest or moving?`, ans: R`At rest relative to the bus, moving relative to the road. Both answers are correct in their own frame.` } },

    { h: R`Distance vs displacement, speed vs velocity`,
      body: [
        R`<b>Distance</b> is the total length of the path you actually travelled. It is a plain number (a <i>scalar</i>) and can never be negative.`,
        R`<b>Displacement</b> is the straight arrow from where you started to where you ended. It has a size <i>and</i> a direction (a <i>vector</i>). If you come back home, your displacement is zero, even after a long walk.`,
        R`<b>Average speed</b> = total distance ÷ total time. <b>Average velocity</b> = displacement ÷ total time. The speed at one instant is the <b>instantaneous speed</b>, which is what a speedometer shows: \(v = \dfrac{dx}{dt}\).`
      ],
      analogy: R`A cricketer runs 22 m to the other crease and back for 2 runs. Distance = 44 m, but displacement = 0, because he is back where he started.`,
      points: [R`Distance ≥ |displacement|. They are equal only for straight-line motion in one direction.`, R`Average speed is <b>not</b> the average of the speeds. Use total distance ÷ total time.`],
      mistake: R`Writing average speed for "30 km/h then 60 km/h for equal distances" as 45 km/h. The correct answer is 40 km/h, because the slower part takes more time.`,
      check: { q: R`You walk 3 m east and then 4 m north. What are your distance and displacement?`, ans: R`Distance = 7 m. Displacement = \(\sqrt{3^2 + 4^2} = 5\) m, towards the north-east.` } },

    { h: R`Acceleration and the three equations of motion`,
      body: [
        R`<b>Acceleration</b> tells how quickly velocity changes: \(a = \dfrac{dv}{dt}\). Its unit is m/s². Speeding up, slowing down, or even just turning are all kinds of acceleration.`,
        R`If velocity changes by the same amount every second, the acceleration is <b>uniform</b> (constant). Only then can we use the three famous equations:`,
        R`\[v = u + at, \qquad s = ut + \tfrac12at^2, \qquad v^2 = u^2 + 2as\]`,
        R`Here \(u\) is the starting velocity, \(v\) the final velocity, \(a\) the acceleration, \(t\) the time and \(s\) the displacement. Choose the equation that does <b>not</b> contain the quantity you neither know nor need.`
      ],
      analogy: R`Pressing the scooter accelerator steadily so that the speedometer goes 0 → 10 → 20 → 30 km/h every second is uniform acceleration. City traffic, where speed jumps around, is non-uniform.`,
      points: [R`Uniform <i>motion</i> means constant velocity, so \(a = 0\).`, R`Uniform <i>acceleration</i> means velocity changes at a steady rate.`, R`Distance covered in the \(n^\text{th}\) second: \(s_n = u + \tfrac a2(2n - 1)\).`],
      mistake: R`Using \(s = ut + \tfrac12 at^2\) when the acceleration is changing. For variable acceleration you must use calculus: \(v = \int a\,dt\), \(x = \int v\,dt\).` },

    { h: R`Falling under gravity`,
      body: [
        R`Near the Earth's surface every object, heavy or light, speeds up downwards at \(g \approx 9.8\) m/s² (we often use 10 m/s²), if air resistance is ignored. This is <b>free fall</b>.`,
        R`Just use the three equations with \(a = -g\) if you take "up" as positive. A ball thrown straight up slows down, stops for an instant at the top, and comes back down to your hand with the same speed it left with.`,
        R`Useful results for a ball thrown up with speed \(u\): maximum height \(H = \dfrac{u^2}{2g}\); time to go up \(= \dfrac ug\); total time in the air \(= \dfrac{2u}{g}\).`
      ],
      points: [R`At the highest point, velocity = 0 but acceleration is still \(g\) downwards.`, R`Time going up = time coming down (no air resistance).`],
      mistake: R`Saying acceleration is zero at the top. If it were zero, the ball would stay there forever!`,
      check: { q: R`A stone is dropped from a height of 20 m. How long does it take to reach the ground? (g = 10)`, ans: R`\(20 = \tfrac12(10)t^2\), so \(t = 2\) s.` } },

    { h: R`Reading motion graphs`,
      body: [
        R`Graphs are a picture of motion, and JEE loves them. Learn three rules:`,
        R`<b>1.</b> The <b>slope of an x–t graph</b> is velocity. A straight line means constant velocity. A curve bending upward means speeding up.`,
        R`<b>2.</b> The <b>slope of a v–t graph</b> is acceleration.`,
        R`<b>3.</b> The <b>area under a v–t graph</b> is displacement. Area below the time axis counts as negative displacement; add all areas as positive to get distance.`
      ],
      analogy: R`Think of the slope as "how steep the road is". A steep x–t line means you are covering ground quickly. A flat line means you are standing still.`,
      points: [R`x–t graph can never be a vertical line (an object cannot be at two places at once).`, R`Area under an a–t graph = change in velocity.`] },

    { h: R`Scalars and vectors`,
      body: [
        R`A <b>scalar</b> has only size: mass, time, distance, speed, energy. A <b>vector</b> has size and direction: displacement, velocity, acceleration, force.`,
        R`Vectors add like arrows, head to tail. For two vectors \(A\) and \(B\) with angle \(\theta\) between them, the resultant is \(R = \sqrt{A^2 + B^2 + 2AB\cos\theta}\).`,
        R`Any vector can be split into two perpendicular <b>components</b>: \(A_x = A\cos\theta\), \(A_y = A\sin\theta\). This trick turns hard 2-D problems into two easy 1-D problems.`
      ],
      analogy: R`Telling a friend "walk 50 m" is not enough to reach your house. You must also say "towards the temple". That direction is what makes displacement a vector.`,
      points: [R`Resultant is maximum (\(A + B\)) when \(\theta = 0^\circ\) and minimum (\(|A - B|\)) when \(\theta = 180^\circ\).`, R`Unit vectors \(\hat i, \hat j, \hat k\) point along x, y, z.`] },

    { h: R`Relative velocity`,
      body: [
        R`The velocity of A as seen by B is \(\vec v_{AB} = \vec v_A - \vec v_B\). In words: pretend B is standing still, and give A the extra velocity \(-\vec v_B\).`,
        R`Two cars moving in the same direction at 60 and 50 km/h see each other moving at only 10 km/h. Moving towards each other, they see 110 km/h.`,
        R`<b>River–boat problems:</b> the boat's actual velocity is (boat in still water) + (river). To cross in the <b>shortest time</b>, point straight across. To land <b>exactly opposite</b>, point upstream so the river's push is cancelled.`
      ],
      analogy: R`Sitting in a train, a train on the next track moving at the same speed in the same direction looks completely still. That is relative velocity = 0.`,
      mistake: R`Adding velocities when the objects move in the same direction. Same direction means subtract; opposite directions mean add (for magnitudes).`,
      check: { q: R`Rain falls straight down at 4 m/s. You run at 3 m/s. At what speed does the rain hit you?`, ans: R`\(\sqrt{4^2 + 3^2} = 5\) m/s, slanting towards you, so you tilt your umbrella forward.` } },

    { h: R`Motion in a plane and projectile motion`,
      body: [
        R`When a ball is thrown at an angle, it moves sideways and up-down at the same time. The big idea is: <b>the horizontal and vertical motions are independent</b>.`,
        R`Horizontally there is no force (ignoring air), so the horizontal velocity \(u\cos\theta\) stays the same all the time. Vertically, gravity acts, so it behaves exactly like a ball thrown straight up with speed \(u\sin\theta\).`,
        R`Putting the two together gives a parabola, with: time of flight \(T = \dfrac{2u\sin\theta}{g}\), maximum height \(H = \dfrac{u^2\sin^2\theta}{2g}\), range \(R = \dfrac{u^2\sin2\theta}{g}\).`
      ],
      analogy: R`Drop one coin and flick another sideways off a table at the same moment. Both hit the floor together! The sideways push does not change how fast they fall.`,
      points: [R`Range is maximum at \(45^\circ\): \(R_{max} = u^2/g\).`, R`Angles \(\theta\) and \(90^\circ - \theta\) give the same range.`, R`At the top, velocity is \(u\cos\theta\) (horizontal), not zero.`],
      mistake: R`Saying the speed at the top of a projectile's path is zero. Only the vertical part is zero.` },

    { h: R`Uniform circular motion`,
      body: [
        R`An object going round a circle at constant speed is still accelerating, because its <b>direction</b> keeps changing. This acceleration always points to the centre and is called <b>centripetal acceleration</b>: \(a_c = \dfrac{v^2}{r} = \omega^2 r\).`,
        R`Angular speed \(\omega\) is the angle turned per second (rad/s). It is linked to speed by \(v = \omega r\), and to the time period by \(\omega = \dfrac{2\pi}{T} = 2\pi f\).`
      ],
      analogy: R`Whirl a stone on a string. You must keep pulling it inward; let go and it flies off in a straight line along the tangent. The inward pull is what keeps changing its direction.`,
      points: [R`Speed constant, velocity changing, acceleration towards the centre.`, R`Over one full circle: displacement = 0, distance = \(2\pi r\).`],
      check: { q: R`A fan blade tip moves in a circle of radius 0.5 m at 10 m/s. Find its centripetal acceleration.`, ans: R`\(a = v^2/r = 100/0.5 = 200\) m/s² towards the centre.` } }
  ],

  examples: [
    { level: 1, t: 2, q: R`An athlete runs once around a 400 m circular track in 50 s. Find the distance, displacement, average speed and average velocity.`,
      steps: [R`Distance = one full lap = 400 m.`, R`He ends where he started, so displacement = 0.`, R`Average speed \(= 400/50 = 8\) m/s. Average velocity \(= 0/50 = 0\).`],
      ans: R`400 m, 0, 8 m/s, 0` },
    { level: 1, t: 3, q: R`A car starts from rest and accelerates uniformly at 2 m/s² for 5 s. Find its final speed and the distance covered.`,
      steps: [R`\(u = 0\), \(a = 2\), \(t = 5\).`, R`\(v = u + at = 0 + 2\times5 = 10\) m/s.`, R`\(s = ut + \tfrac12at^2 = 0 + \tfrac12(2)(25) = 25\) m.`],
      ans: R`10 m/s and 25 m` },
    { level: 1, t: 1, q: R`A stone is dropped from a 45 m high building. How long does it take to reach the ground, and how fast is it going then? (g = 10 m/s²)`,
      steps: [R`Dropped means \(u = 0\). Take downward as positive, \(a = 10\).`, R`\(45 = \tfrac12(10)t^2\), so \(t^2 = 9\) and \(t = 3\) s.`, R`\(v = gt = 30\) m/s.`],
      ans: R`3 s, 30 m/s` },
    { level: 1, t: 6, q: R`A force of 10 N acts at \(37^\circ\) above the horizontal. Find its horizontal and vertical components. (\(\cos37^\circ = 0.8\), \(\sin37^\circ = 0.6\))`,
      steps: [R`\(F_x = F\cos\theta = 10\times0.8\).`, R`\(F_y = F\sin\theta = 10\times0.6\).`],
      ans: R`8 N horizontal, 6 N vertical` },
    { level: 3, t: 8, q: R`A ball is thrown horizontally at 10 m/s from the top of a 20 m tower. Find the time to hit the ground, how far from the tower it lands, and its velocity on impact. (g = 10)`,
      steps: [R`Vertical motion starts from zero: \(20 = \tfrac12(10)t^2\), so \(t = 2\) s.`, R`Horizontal velocity stays 10 m/s: distance \(= 10\times2 = 20\) m.`, R`At impact: \(v_x = 10\), \(v_y = gt = 20\). Speed \(= \sqrt{100 + 400} = \sqrt{500}\).`, R`Angle below horizontal: \(\tan\phi = v_y/v_x = 2\).`],
      ans: R`2 s; 20 m; \(\approx 22.4\) m/s at \(\tan^{-1}2 \approx 63.4^\circ\) below the horizontal` },
    { level: 3, t: 5, q: R`When a man walks at 3 km/h, the rain seems to fall vertically. When he walks at 6 km/h in the same direction, the rain seems to fall at \(45^\circ\) to the vertical. Find the actual velocity of the rain.`,
      steps: [R`Let the rain's velocity be \((a, -b)\), with the man walking along +x.`, R`At 3 km/h, relative velocity \((a - 3, -b)\) is vertical, so \(a = 3\).`, R`At 6 km/h, relative velocity \((3 - 6, -b) = (-3, -b)\) makes \(45^\circ\) with the vertical, so \(b = 3\).`, R`Actual speed \(= \sqrt{3^2 + 3^2}\).`],
      ans: R`\(3\sqrt2 \approx 4.24\) km/h, at \(45^\circ\) to the vertical, slanting in the direction the man walks` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`A car goes 3 km east and then 4 km north. Its displacement is:`,
      options: [R`7 km`, R`5 km`, R`1 km`, R`12 km`], correct: 1,
      solution: R`Displacement is the straight line from start to end: \(\sqrt{3^2 + 4^2} = 5\) km. 7 km is the distance.` },
    { level: 1, type: 'mcq', q: R`The slope of a velocity–time graph gives:`,
      options: [R`velocity`, R`displacement`, R`acceleration`, R`distance`], correct: 2,
      solution: R`Slope of v–t = change in velocity ÷ time = acceleration. (Area under it gives displacement.)` },
    { level: 1, type: 'mcq', q: R`Which of these is a vector quantity?`,
      options: [R`speed`, R`distance`, R`time`, R`displacement`], correct: 3,
      solution: R`Displacement has both size and direction. The others have only size.` },
    { level: 1, type: 'mcq', q: R`A body moving with constant velocity has acceleration:`,
      options: [R`zero`, R`constant but not zero`, R`increasing`, R`equal to g`], correct: 0,
      solution: R`Acceleration is the rate of change of velocity. If velocity does not change, acceleration is zero.` },
    { level: 1, type: 'num', q: R`A car starts from rest and accelerates at 3 m/s² for 4 s. How far does it travel (in m)?`,
      answer: 24, tol: 0.01, unit: 'm',
      solution: R`\(s = \tfrac12at^2 = \tfrac12(3)(16) = 24\) m.` },
    { level: 1, type: 'num', q: R`A ball is dropped from rest and falls for 2 s. What is its speed (in m/s)? (g = 10 m/s²)`,
      answer: 20, tol: 0.01, unit: 'm/s',
      solution: R`\(v = gt = 10\times2 = 20\) m/s.` },
    { level: 2, type: 'mcq', q: R`For a fixed launch speed, the horizontal range of a projectile is maximum when it is thrown at:`,
      options: [R`\(30^\circ\)`, R`\(45^\circ\)`, R`\(60^\circ\)`, R`\(90^\circ\)`], correct: 1,
      solution: R`\(R = u^2\sin2\theta/g\) is largest when \(\sin2\theta = 1\), i.e. \(\theta = 45^\circ\).` },
    { level: 2, type: 'mcq', q: R`Two projectiles thrown with the same speed have the same range. Their angles of projection must be:`,
      options: [R`\(\theta\) and \(2\theta\)`, R`\(\theta\) and \(90^\circ - \theta\)`, R`\(\theta\) and \(180^\circ - \theta\)`, R`\(\theta\) and \(45^\circ + \theta\)`], correct: 1,
      solution: R`\(\sin2\theta = \sin(180^\circ - 2\theta) = \sin2(90^\circ - \theta)\), so complementary angles give equal ranges.` },
    { level: 2, type: 'mcq', q: R`A particle moves in a circle at constant speed. Which statement is true?`,
      options: [R`Its velocity is constant`, R`Its acceleration is zero`, R`Its speed is constant but its velocity changes`, R`Its acceleration points along the tangent`], correct: 2,
      solution: R`The direction keeps changing, so velocity changes. The acceleration \(v^2/r\) points to the centre.` },
    { level: 2, type: 'mcq', q: R`A body starts with 5 m/s and accelerates at 2 m/s². How far does it travel in the 3rd second?`,
      options: [R`9 m`, R`10 m`, R`11 m`, R`15 m`], correct: 1,
      solution: R`\(s_n = u + \tfrac a2(2n - 1) = 5 + 1\times5 = 10\) m.` },
    { level: 2, type: 'num', q: R`A projectile is launched at 20 m/s at \(30^\circ\) to the horizontal. Find its maximum height (in m). (g = 10)`,
      answer: 5, tol: 0.01, unit: 'm',
      solution: R`\(H = \dfrac{u^2\sin^2\theta}{2g} = \dfrac{400\times0.25}{20} = 5\) m.` },
    { level: 2, type: 'num', q: R`A boat heads straight across an 80 m wide river at 4 m/s (relative to the water). The river flows at 3 m/s. How far downstream (in m) does the boat land?`,
      answer: 60, tol: 0.01, unit: 'm',
      solution: R`Crossing time \(= 80/4 = 20\) s. Drift \(= 3\times20 = 60\) m.` },
    { level: 2, type: 'num', q: R`A ball is thrown straight up at 30 m/s. After how many seconds does it come back to the thrower's hand? (g = 10)`,
      answer: 6, tol: 0.01, unit: 's',
      solution: R`Time up \(= u/g = 3\) s; time down is the same, so total \(= 6\) s.` },
    { level: 3, type: 'mcq', q: R`A ball is thrown horizontally at 15 m/s from an 80 m high cliff. With what speed does it hit the ground? (g = 10)`,
      options: [R`55 m/s`, R`40 m/s`, R`35 m/s`, R`about 42.7 m/s`], correct: 3,
      solution: R`Fall time: \(80 = 5t^2\), so \(t = 4\) s and \(v_y = 40\) m/s. \(v = \sqrt{15^2 + 40^2} = \sqrt{1825} \approx 42.7\) m/s.` },
    { level: 3, type: 'mcq', q: R`Two balls are projected with the same speed at \(30^\circ\) and \(60^\circ\). The ratio of their maximum heights is:`,
      options: [R`1 : 3`, R`3 : 1`, R`1 : \(\sqrt3\)`, R`1 : 1`], correct: 0,
      solution: R`\(H \propto \sin^2\theta\): \(\sin^230^\circ : \sin^260^\circ = \tfrac14 : \tfrac34 = 1 : 3\).` },
    { level: 3, type: 'num', q: R`A particle moves along x with \(x = t^3 - 6t^2 + 9t\) (SI units). Find its acceleration (in m/s²) at the second instant when it is momentarily at rest.`,
      answer: 6, tol: 0.01, unit: 'm/s²',
      solution: R`\(v = 3t^2 - 12t + 9 = 3(t - 1)(t - 3)\), so it is at rest at \(t = 1\) s and \(t = 3\) s. \(a = 6t - 12\), so at \(t = 3\): \(a = 6\) m/s².` }
  ]
});
