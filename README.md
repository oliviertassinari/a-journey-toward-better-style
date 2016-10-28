# A Journey toward better style

## Acknowledgment

- I would like to thank [Nathan Marks](https://github.com/nathanmarks) for the awesome work is has done addressing the styling issues.
- I would like to thank Pete Hunt for his inspiring talk on reusable components.
- I would like to thank [Paris.js](http://parisjs.org/) for giving me the opportunity to share this topic.

## Date

2016-10-27

## Online version

- [show](https://oliviertassinari.github.io/a-journey-toward-better-style/)
- [presenter](https://oliviertassinari.github.io/a-journey-toward-better-style/#/?presenter)

## CSS-in-JS comparaison

We started looking for the best styling solution available.
[Nathan Marks](https://github.com/nathanmarks) built a custom solution
for the needs of **Material-UI**: [stylishly](https://github.com/nathanmarks/stylishly).
Ultimately we reverted. We think that it's much better to rely on the community.
Still, that was a very valuable experimentation.

Regarding the community, looking at the [MicheleBertoli's repository](https://github.com/MicheleBertoli/css-in-js). You can tell that there is a lot a solution available.

### What's the best one for our needs?

For the sake of this presentation, I have selected 5 libraries that I think have
taken valuable tradeoffs.
I'm gonna give my point of view in the rest of this section.
The information given are biased by my understanding of the reality.

- CSS modules.
 - Singularity: Extended CSS DSL. Generate style at built time.
 - Motivation: Having some isolated and composable module of CSS.
Stay as close as possible to the CSS ecosystem.
- Aphrodite.
 - Singularity: Per rule style usage and injection.
 - Motivation: Khan Academy was looking for a better way to style components with an existing code base. E.g. usage of `!important`.
- styled-components.
 - Singularity: Uses post-CSS at runtime.
 - Motivation: ? My best guess is, leveraging JS power while still using the CSS syntax.
- JSS:
 - Singularity: Has a low-level API.
 - Motivation: ? I have no clue. I should be asking @nathanmarks.
- Fela
 - Singularity: Has a functional API.
 - Motivation: ? Could be inspired by posts like [Functional Programming, CSS, and your sanity](http://www.jon.gold/2015/07/functional-css/).

### Interesting dimensions

We can't compare anything without some dimensions.
But having too much of them add noise.

:warning: Be aware that horse transportation is better than cars when following biased
dimensions.
I have sorted them by importance.

- **The API**.
 - Is it taking full advantage of JavaScript?
 JavaScript is a much more powerful language than CSS.
 When using it, you no longer have to worry about CSS linter, CSS syntax, CSS pre-processor
 - Is the API low or high level?
 The theming requirement is quite high for Material-UI. The much freedom we have, the better.
 - Is the API declarative?
 The more declarative we are, the better.
- **Time to first paint**.
We have a legacy of poor performance with our inline-style implementation (lake of caching).
Reducing the delay between an interaction and something on the screen is quite critical for us.
I have run a simple benchmark on a modified version of [CSS-in-JS](https://github.com/MicheleBertoli/css-in-js)
There is quite some factor than can make a difference. I have noticed a factor x2 of difference between the fastest solution (CSS modules) and the slowest one (styled-components).
 - Is the style pre-processed at runtime of build time?
 - Is the style injected as class names used or upfront during the bootstrap?
 - How are the classNames generated? E.g. computing a hash of the rule object could be expensive.
- **Library size**.
Users of Material-UI could be using a single component out of the available ones.
E.g. the `<DatePicker />`.
We want to minimize the entry price of using a single component.
- **Server Rendering**.
Server side rendering a page drastically improve perceived performance for a user first visit (for repetitive one, Service Worker are even more efficient).
Material-UI can't be taken seriously without a strong answer to this point.
 - Can requests be parallelized?
 I.e, not using a singleton, that's also bad for security.
 - Is the API allowing streaming the response?
- **Unbiased**.
The less coupled with a solution we are the better.
We also want to make sure the solution we are going to use reach a broad audience.
E.g. LESS is used by the Angular and React community. That's increasing odds of success.
 - Are we coupled to React?
 - Are we coupled to Webpack?
- **Debug**.
Users of Material-UI were complaining that the debugging experience was poor with inline-style.
Browser dev tool handles much better the CSS.
Still, the styling solution can impact it.
 - Are the classNames readable in dev mode?
 - Are the classNames injected into a single `style` element or multiple?
- **CSS output size**.
That last dimension is less interesting.
I was just curious.

### Results

|    | CSS modules | Aphrodite | styled-components | JSS | Fela |
|:---|:------------|:----------|:------------------|:----|:-----|
| API | -- | + | - | + | ++ |
| Time to first paint | ++ | o | - | + | o |
| Library size in kB | ~0 | 18 | 126 | 22 | 9 |
| Server Rendering | + | o | - | ++ | o |
| Unbiased | o | o | - | + | + |
| Debug| - | o | o | + | - |
| CSS output size | o | ++ | + | + | o |

- `++` awesome
- `+` great
- `o` enough
- `-` not great
- `--` no

## Going forward

Material-UI has chosen `JSS`. It's addressing our unique needs.
Your needs are most likely different. It could be better for you to use a another solution.
Be sure you make an **informed choice** :bulb:.

The compared libraries are going to improve.
My comparison might not worth anything one year from now.

