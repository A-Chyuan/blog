# 微積分

## 教科書

|                                                                     書名                                                                     |                作者                 |                                       資源                                       |
| :------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------: | :------------------------------------------------------------------------------: |
| 《<span class="book-title"><span class="main-title">Calculus</span><span class="subtitle">Early Transcendentals, 9th Edition</span></span>》 | <p class="author">James Stewart</p> |                               [Stewart Calculus][]                               |
|           《<span class="book-title"><span class="main-title">翻轉微積分</span><span class="subtitle">2nd Edition</span></span>》            |    <p class="author">喻超凡</p>     | [微積分習題詳解 1][]<br />[微積分習題詳解 2][]<br />[轉學考微積分歷屆試題詳解][] |

[Stewart Calculus]: https://stewartcalculus.com/index.php
[微積分習題詳解 1]: https://drive.google.com/file/d/1mXf1CBDqTxNKrk9cjzemEhBKOzr0d-fp/view
[微積分習題詳解 2]: https://drive.google.com/file/d/1n9TrA7Ug5s-4mAk8oC6MzEVubBXJiTeI/view
[轉學考微積分歷屆試題詳解]: https://drive.google.com/file/d/1T9H5RZBK7Upw2Sq5avTJSz_DABgSNFwN/view

## 開放式課程

| 學校                   |    老師    | 課程名稱           | 其他             |
| ---------------------- | :--------: | ------------------ | ---------------- |
| [國立中央大學數學系][] | [蘇承芳][] | [微積分預備課程][] | [講義][]         |
| [國立陽明交通大學][]   | [蘇承芳][] | [微積分甲(一)][]   | [習題與考古題][] |
|                        |            | [微積分甲(二)][]   |                  |
|                        |    莊重    | [微積分(一)][]     |                  |
|                        |            | [微積分(二)][]     |                  |
| [中華科技大學][]       |   李柏堅   | [微積分][]         |                  |

[國立陽明交通大學]: https://ocw.nycu.edu.tw/
[蘇承芳]: https://sites.google.com/view/chengfangsu/home
[微積分甲(一)]: https://www.youtube.com/playlist?list=PLj6E8qlqmkFvJuL-gb06J8XHNSj_lfFwP
[微積分甲(二)]: https://www.youtube.com/playlist?list=PLj6E8qlqmkFugDslxZrgDRYo9V2D6B6N6
[微積分(一)]: https://www.youtube.com/playlist?list=PLj6E8qlqmkFtwDlDoBnbyhCfAa7JL52OG
[微積分(二)]: https://www.youtube.com/playlist?list=PLj6E8qlqmkFv-kcqx88N4wUk4oLU3fSOk
[習題與考古題]: https://calculus.math.nycu.edu.tw/exams-index/

[國立中央大學數學系]: https://w2.math.ncu.edu.tw/course/open
[微積分預備課程]: https://www.youtube.com/playlist?list=PLC7S3OpzMqm9EbRyd1va2KAP0uepEQdNQ
[講義]: http://www.math.ncu.edu.tw/~scf1204/pre/1.htm

[中華科技大學]: https://www.youtube.com/@CUSTCourses
[微積分]: https://www.youtube.com/playlist?list=PLpXfHEl2fzl4H-_gyWtQWezMnrtCUBA79

## 線上工具

- [Wolfram Alpha](https://www.wolframalpha.com/)
- [Integral Calculator](https://www.integral-calculator.com/)

## Function Plot

<details>
    <summary>
    $$
    \text{Butterfly curve}
    $$
    $$
    \begin{cases}
    & x = \sin(t) \Big( e^{\cos(t)} - 2 \cos(4t) - \sin^5(\dfrac{t}{12}) \Big) \\
    && , \ 0 \leq t \leq 12\pi \\
    & y = \cos(t) ()
    \end{cases}
    $$
    </summary>
    <div id="butterfly-curve"></div>
</details>

---

<details>
    <summary>$$ \text{Derivative} $$</summary>
    <div class="function-plot-grid">
        <div id="derivative-a">
        $$ y = \dfrac{1}{3}x^3 - 2x^2 + 3x + 2 $$
        </div>
        <div id="derivative-b">
        $$ \dfrac{dy}{dx} = x^2 - 4x + 3 $$
        </div>
    </div>
</details>

---

<details>
    <summary>$$ \text{Integral} $$</summary>
    <div id="integral"></div>
    <form class="function-plot-control-form">
        <input id="integralSlider" type="range" min="2" max="30" step="1" value="3">
        <output id="integralSliderOutput">3</output>
    </form>
</details>

<script src="./notes/mathematics/微積分/js/butterfly-curve.js"></script>
<script src="./notes/mathematics/微積分/js/derivative.js"></script>
<script src="./notes/mathematics/微積分/js/integral.js"></script>
