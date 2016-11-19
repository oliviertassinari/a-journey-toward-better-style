import React from 'react';
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Table,
  TableRow,
  TableHeaderItem,
  TableItem,
  Heading,
  Image,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Spectacle,
  Text,
} from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';

require('../lib/prism-tomorrow.css');
require('../lib/prism.js');
require('../lib/prism-jsx.min');
require('../lib/prism-less.min');
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
  doctolib: require('../assets/doctolib.png'),
  blink: require('../assets/blink.png'),
  'material-ui': require('../assets/material-ui.svg'),
  CSSinJS1: require('../assets/CSSinJS1.png'),
  CSSinJS2: require('../assets/CSSinJS2.png'),
  CSSinJS3: require('../assets/CSSinJS3.png'),
  CSSinJS4: require('../assets/CSSinJS4.png'),
  CSSinJS5: require('../assets/CSSinJS5.png'),
  styledComponents: require('../assets/styledComponents.png'),
  doctolibAlert: require('../assets/doctolib-alert.png'),
  doctolibAlert2: require('../assets/doctolib-alert-2.png'),
  issuesAtScale: require('../assets/issuesAtScale.png'),
  fail: require('../assets/fail.gif'),
  behindTheHood: require('../assets/behindTheHood.png'),
};


const Rank = ({ rank, children }) => {
  const rankColor = {
    '--': '#ff0000',
    '-': '#ff9800',
    o: '#f2ff00',
    '+': '#a4ff00',
    '++': '#2aca39',
  };

  return <Text bgColor={rankColor[rank]}>{children}</Text>;
};

const materialPrimary = '#2196f3';

preloader(images);

const theme = createTheme({
  primary: 'white',
  secondary: 'black',
  tertiary: 'black',
  quartenary: 'black',
}, {
  primary: 'Roboto',
  secondary: 'Roboto',
  tertiary: 'Roboto',
});

const Presentation = () => {
  return (
    <Spectacle theme={theme}>
      <Deck transition={['fade']} transitionDuration={300} progress="bar">
        <Slide
          notes={`
            Hello everyone, I hope you had a good day.
            During those 20-30 minutes I have with you, I want to share
            my trip, especially enough, through the styles.
          `}
        >
          <Heading size={1}>
            A Journey toward better style
          </Heading>
        </Slide>
        <Slide
          notes={`
            But before going further, I would like to introduce myself.
            My name is Oliver.
            I wrote my first web app there for 8 years.
            It was a time when he had to fight for it to work.
          `}
        >
          <Heading size={4}>
            Who am I?
          </Heading>
        </Slide>
        <Slide
          notes={`
            I'm a Front-End Engineer at Doctolib.
            At Doctolib we are streamlining access to healthcare.
            If you need a doctor, come see us.
          `}
        >
          <Image width="80%" src={images.doctolib} />
        </Slide>
        <Slide
          bgColor={materialPrimary}
          notes={`
            But what brings me here is my hobby.
            I'm a major contributor Material-UI.
            It is a low-level library of components implementing the
            Material Design Specification.
            It's based on React.
            I have started working on it 2 years ago.
          `}
        >
          <Image width="100%" src={images['material-ui']} />
          <Heading size={4} textColor="white" bold={false}>
            Material-UI
          </Heading>
        </Slide>
        <Slide
          notes={`
            The style is in the heart of the problem Material-UI responds.
            The specification is very complicated.
            It is much more complicated than Bootstrap.
            I spoke of a trip, this trip begins 22 years ago.
            What's in CSS?
            In 1994, the web started to be used by the authors to publish content.
            These authors sought a reliable way to change the style of their documents.
            This was not possible at that time. (It was already working with Word).
            They were quite angry with the "navigator".
            There were several proposed concurrent specifications.
            There is a very cool site that traces the story.
            There is a feature that allowed the CSS spec to stand out.
            The style was to conjugate three imperatives.
            That has given life to the CSS that we know.
          `}
        >
          <BlockQuote>
            <Quote style={{ borderColor: 'grey' }}>
              <Text
                textSize="2rem"
                textColor="black"
                bold={false}
                lineHeight={1.3}
              >
                {`it took into account that on the Web the style of a document couldn't be designed
                  by either the author or the reader on their own,
                  but that their wishes had to be combined, or "`}
                <strong>cascaded</strong>
                {`," in some way; and, in fact, not just the reader's and the author's wishes,
                  but also the capabilities of the display device and the browser.`}
              </Text>
            </Quote>
            <Cite textColor={materialPrimary}>
              {'https://www.w3.org/Style/LieBos2e/history/'}
            </Cite>
          </BlockQuote>
        </Slide>
        <Slide
          notes={`
            It turns out that Pete Hunt raised a very good spot.
            This feature that allowed the CSS to stand out was removed
            2 years ago from the most popular browser in the world, Chrome.
          `}
        >
          <Link href="https://src.chromium.org/viewvc/blink?revision=161671&view=revision">
            <Image width="100%" src={images.blink} />
          </Link>
        </Slide>
        <Slide
          notes={`
            This piece of information is anecdotal.
            My point is that choices made at the origin of the CSS have nothing more to do with
            the reality of its use.
            This is especially true for those who are very oriented components applications.
            In terms of documents, I can not say.
          `}
        >
          <Heading size={4}>
            Document vs App
          </Heading>
        </Slide>
        <Slide
          notes={`
            But then you must be asking yourself.
            What is this guy talking about CSS for 5 min at JS meetup?
            We have seen, for 2 years, many attempts to address the problem.
            Much of them are based on JavaScript.
          `}
        >
          <Image width="100%" src={images.CSSinJS1} />
        </Slide>
        <Slide>
          <Image width="100%" src={images.CSSinJS2} />
        </Slide>
        <Slide>
          <Image width="100%" src={images.CSSinJS3} />
        </Slide>
        <Slide>
          <Image width="100%" src={images.CSSinJS4} />
        </Slide>
        <Slide>
          <Image width="100%" src={images.CSSinJS5} />
        </Slide>
        <Slide
          bgColor="papayawhip"
          notes={`
            And the latest release in the last few days.
            Difficult to choose among all the choices (paradox of choice).
            I hope that at the end of this talk you'll be able to make an informed choice.
          `}
        >
          <Link href="https://github.com/styled-components/styled-components">
            <Image height="250" src={images.styledComponents} />
          </Link>
        </Slide>
        <Slide
          notes={`
            I have already used the term component a lot.
            I would like us to agree on what I see as a component.
            This definition comes from the React world.
            I assure you, I do not want to do a React talk.
            This is a piece of interface usable in different contexts.
          `}
        >
          <Heading size={4} lineHeight={2.4}>
            What is a component?
          </Heading>
          <Text textAlign="left" lineHeight={1.2}>
            {'This is a piece of interface usable in different contexts.'}
          </Text>
        </Slide>
        <Slide
          bgColor={materialPrimary}
          notes={`
            Let's take a RaisedButton as an example. We will find it all over the applications.
            (forms, dialogs, ...)
            In the rest of the presentation, we will see the different approaches
            we can use to get this result.
            Let's see how our approach has evolved and improved.
            Challenges / Problems / Solutions
          `}
        >
          <Image height={200} src={require('../assets/button.gif')} />
        </Slide>
        <Slide
          notes={`
            Conventional approach description.
            Do you see a problem with this approach?
            Trick question. There are several of them.
            Otherwise, I would not be here.
            One of the most important: the weak link between the definition and use.
          `}
        >
          <Heading size={5}>
            {'Conventional approach'}
          </Heading>
          <br />
          <CodePane
            lang="less"
            source={require('raw!../assets/bootstrap.less.example')}
            textSize="0.5em"
          />
          <br />
          <CodePane
            lang="jsx"
            source={require('raw!../assets/bootstrap.jsx.example')}
            textSize="0.5em"
          />
        </Slide>
        <Slide
          notes={`
            We had a bad experience at Doctolib.
            1. Desktop site
            ...months
            2. Mobile site
            ...months
            3. Designer.
            Class name conflict, different sources.
          `}
        >
          <Image width="80%" src={images.doctolibAlert} />
        </Slide>
        <Slide
          notes={`
            It was embarrassing.
            5m visitors a month.
          `}
        >
          <Image width="80%" src={images.doctolibAlert2} />
        </Slide>
        <Slide
          bgColor="black"
          notes={`
            I spoked of several problems.
            @vjeux, an engineer at Facebook quite a nice presentation on the subject.
            I do not have time to go into the details.
            But if you were to retain only one problem with the CSS.
            It's isolation!
            It is like a sword of damocles.
            You do not know when the next issue will fall on you.
          `}
        >
          <Link to="https://speakerdeck.com/vjeux/react-css-in-js">
            <Image width="80%" src={images.issuesAtScale} />
          </Link>
          <Link href="https://twitter.com/vjeux">
            <Text textColor={materialPrimary} textSize="1em">
              @vjeux
            </Text>
          </Link>
        </Slide>
        <Slide
          notes={`
            Some additional challenge with a lib that is used in an infinite number
            of different context.
            We have the same problems with an app, but here they are multiplied.
             - SASS unsupported, too much time needed to maintain it.
             - What about the use of a single component on the screen, splitting code?
          `}
        >
          <Heading size={4}>
            Challenges with Material-UI
          </Heading>
          <List>
            <ListItem>
              <Text textSize="2rem" lineHeight={1.4}>
                Dependency to the LESS toolchain?
              </Text>
            </ListItem>
            <ListItem>
              <Text textSize="2rem" lineHeight={1.4}>
                Changing the theme at runtime?
              </Text>
            </ListItem>
            <ListItem>
              <Text textSize="2rem" lineHeight={1.4}>
                A big monolithic CSS file?
              </Text>
            </ListItem>
            <ListItem>
              <Text textSize="2rem" lineHeight={1.4}>
                Simple overrides?
              </Text>
            </ListItem>
          </List>
        </Slide>
        <Slide
          notes={`
            Inspired by vjeux
            Change controversial. Question our principles
            separation of responsibilities.
            This allowed us:
            - Solve all previous issues.
            - Remove the dependency to external toolchains, webpack etc.
            - Fully Dynamic Style
            - Inlining of SSR-critical style for free
            - Overrides with a clear API and a hard link
            By the way, the support of this presentation is using Spectacle.
            Spectacle is based on the inline style.
          `}
        >
          <Heading size={5}>
            {'Solution'}
          </Heading>
          <br />
          <CodePane
            lang="js"
            source={require('raw!../assets/inlineStyle.js.example')}
            textSize="0.5em"
          />
          <br />
          <CodePane
            lang="jsx"
            source={require('raw!../assets/inlineStyle.jsx.example')}
            textSize="0.5em"
          />
        </Slide>
        <Slide
          notes={`
            After + a year with this solution in production.
            We identify some major issues:
            - Poor performance of re-render. GC, no caches.
            - Interaction of time greater with SRR : No hover before the JS environment
              has bootstrapped.
            - Media server side queries are impossible.
              (Client Hints browser support is too poor)
            - Hard to debug, dev tools are optimized for CSS not inline-style.
          `}
        >
          <Heading size={4}>
            {"Issues with the inline-style"}
          </Heading>
          <List>
            <ListItem>
              <Text textSize="2rem" lineHeight={1.4}>
                Performance ?
              </Text>
            </ListItem>
            <ListItem>
              <Text textSize="2rem" lineHeight={1.4}>
                Keyframes / Pseudo (elements / selectors) ?
              </Text>
            </ListItem>
            <ListItem>
              <Text textSize="2rem" lineHeight={1.4}>
                Media queries ?
              </Text>
            </ListItem>
            <ListItem>
              <Text textSize="2rem" lineHeight={1.4}>
                Debug ?
              </Text>
            </ListItem>
            <ListItem>
              <Text textSize="2rem" lineHeight={1.4}>
                React v15 ⚰
              </Text>
            </ListItem>
          </List>
        </Slide>
        <Slide
          style={{
            backgroundImage: `url(${images.fail})`,
            backgroundSize: 'cover',
          }}
          notes={`
            We can do very little compromise on this point.
            To achieve a great result, we need the CSS.
            As this cat, we were too ambitious.
            But we learn from our mistakes.
          `}
        >
          <Heading size={4} textColor="white">
            {'Almost!'}
          </Heading>
        </Slide>
        <Slide
          notes={`
            We were wondering how to do better.
            - Strong link to:
              - Remove dead code
              - Minification
              - Uniqueness to prevent collision
            - Generation at runtime is almost the only way with large-scale apps.
          `}
        >
          <Heading size={4}>
            {'Challenges with class names'}
          </Heading>
          <List>
            <ListItem>
              <Text textSize="2rem" lineHeight={1.4}>
                {'Strong link between the definition and use.'}
              </Text>
            </ListItem>
            <ListItem>
              <Text textSize="2rem" lineHeight={1.4}>
                {'Predictability to allow SSR rehydration.'}
              </Text>
            </ListItem>
            <ListItem>
              <Text textSize="2rem" lineHeight={1.4}>
                {'Quick generation at runtime.'}
              </Text>
            </ListItem>
          </List>
        </Slide>
        <Slide
          notes={`
            We started looking shoes to fill.
          `}
        >
          <Heading size={4}>
            {'Candidates'}
          </Heading>
          <List>
            <ListItem>
              <Text textSize="2rem" lineHeight={1.4}>
                {'CSS modules'}
              </Text>
            </ListItem>
            <ListItem>
              <Text textSize="2rem" lineHeight={1.4}>
                {'Aphrodite'}
              </Text>
            </ListItem>
            <ListItem>
              <Text textSize="2rem" lineHeight={1.4}>
                {'styled-components'}
              </Text>
            </ListItem>
            <ListItem>
              <Text textSize="2rem" lineHeight={1.4}>
                {'JSS'}
              </Text>
            </ListItem>
            <ListItem>
              <Text textSize="2rem" lineHeight={1.4}>
                {'Fela'}
              </Text>
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Table>
            <tbody>
              <TableRow>
                <TableHeaderItem />
                <TableHeaderItem textSize="2rem">
                  CSS modules
                </TableHeaderItem>
                <TableHeaderItem textSize="2rem">
                  Aphrodite
                </TableHeaderItem>
                <TableHeaderItem textSize="2rem">
                  styled-components
                </TableHeaderItem>
                <TableHeaderItem textSize="2rem" style={{ padding: '0 30px' }}>
                  JSS
                </TableHeaderItem>
                <TableHeaderItem textSize="2rem" style={{ padding: '0 30px' }}>
                  Fela
                </TableHeaderItem>
              </TableRow>
              <Appear>
                <TableRow>
                  <TableItem textSize="2rem">
                    API
                  </TableItem>
                  <TableItem notes="CSS, hacky syntax doesn’t look like SASS or LESS">
                    <Rank rank="--">
                      --
                    </Rank>
                  </TableItem>
                  <TableItem>
                    <Rank rank="+">
                      +
                    </Rank>
                  </TableItem>
                  <TableItem notes="CSS">
                    <Rank rank="-">
                      -
                    </Rank>
                  </TableItem>
                  <TableItem notes="Low level, lot of freedom">
                    <Rank rank="+">
                      +
                    </Rank>
                  </TableItem>
                  <TableItem notes="Best functional declarative approach">
                    <Rank rank="++">
                      ++
                    </Rank>
                  </TableItem>
                </TableRow>
              </Appear>
              <Appear>
                <TableRow>
                  <TableItem textSize="2rem">
                    First Paint
                  </TableItem>
                  <TableItem notes="preprocessor, but inject everything: 87ms, need isomorphic-style-loader">
                    <Rank rank="++">
                      ++
                    </Rank>
                  </TableItem>
                  <TableItem
                    notes={`
                      prefix everything, the ASAP cause some trouble.
                      inject just what is needed: 102ms
                    `}
                  >
                    <Rank rank="o">
                      o
                    </Rank>
                  </TableItem>
                  <TableItem notes="use postcss, slow: 145ms">
                    <Rank rank="-">
                      -
                    </Rank>
                  </TableItem>
                  <TableItem notes="only prefix the user agent, inject at runtime: 103ms">
                    <Rank rank="+">
                      +
                    </Rank>
                  </TableItem>
                  <TableItem notes="use props hashing takes some CPU cycles: 98ms">
                    <Rank rank="o">
                      o
                    </Rank>
                  </TableItem>
                </TableRow>
              </Appear>
              <Appear>
                <TableRow>
                  <TableItem textSize="2rem" notes="in production, before gzip">
                    Lib size kB
                  </TableItem>
                  <TableItem>
                    <Text textSize="2rem">
                      <Rank rank="++">
                        ~0
                      </Rank>
                    </Text>
                  </TableItem>
                  <TableItem>
                    <Text textSize="2rem">
                      <Rank rank="o">
                        18
                      </Rank>
                    </Text>
                  </TableItem>
                  <TableItem notes="use postcss">
                    <Text textSize="2rem">
                      <Rank rank="--">
                        126
                      </Rank>
                    </Text>
                  </TableItem>
                  <TableItem>
                    <Text textSize="2rem">
                      <Rank rank="o">
                        22
                      </Rank>
                    </Text>
                  </TableItem>
                  <TableItem>
                    <Text textSize="2rem">
                      <Rank rank="+">
                        9
                      </Rank>
                    </Text>
                  </TableItem>
                </TableRow>
              </Appear>
              <Appear>
                <TableRow>
                  <TableItem textSize="2rem">
                    SSR
                  </TableItem>
                  <TableItem notes="needs webpack to work with isomorphic-style-loader">
                    <Rank rank="+">
                      +
                    </Rank>
                  </TableItem>
                  <TableItem notes="singleton, security!">
                    <Rank rank="o">
                      o
                    </Rank>
                  </TableItem>
                  <TableItem>
                    <Rank rank="-">
                      -
                    </Rank>
                  </TableItem>
                  <TableItem notes="no singleton, //, could support steaming">
                    <Rank rank="++">
                      ++
                    </Rank>
                  </TableItem>
                  <TableItem notes="singleton, security!">
                    <Rank rank="o">
                      o
                    </Rank>
                  </TableItem>
                </TableRow>
              </Appear>
              <Appear>
                <TableRow>
                  <TableItem textSize="2rem" notes="in production, before gzip">
                    Unbiased
                  </TableItem>
                  <TableItem notes="Built for Webpack">
                    <Rank rank="o">
                      o
                    </Rank>
                  </TableItem>
                  <TableItem notes="Built for React">
                    <Rank rank="o">
                      o
                    </Rank>
                  </TableItem>
                  <TableItem notes="React dependency">
                    <Rank rank="-">
                      -
                    </Rank>
                  </TableItem>
                  <TableItem notes="Unbiased">
                    <Rank rank="+">
                      +
                    </Rank>
                  </TableItem>
                  <TableItem notes="Unbiased">
                    <Rank rank="+">
                      +
                    </Rank>
                  </TableItem>
                </TableRow>
              </Appear>
              <Appear>
                <TableRow>
                  <TableItem textSize="2rem">
                    Debug
                  </TableItem>
                  <TableItem notes="classNames with .c1, not indented">
                    <Rank rank="-">
                      -
                    </Rank>
                  </TableItem>
                  <TableItem notes="use a single <style />, classNames with information, not indented">
                    <Rank rank="o">
                      o
                    </Rank>
                  </TableItem>
                  <TableItem notes="classNames with .iyMDWC, indented">
                    <Rank rank="o">
                      o
                    </Rank>
                  </TableItem>
                  <TableItem notes="classNames with information, indented">
                    <Rank rank="+">
                      +
                    </Rank>
                  </TableItem>
                  <TableItem notes="classNames with .c1, not indented">
                    <Rank rank="-">
                      -
                    </Rank>
                  </TableItem>
                </TableRow>
              </Appear>
              <Appear>
                <TableRow>
                  <TableItem textSize="2rem">
                    CSS output size
                  </TableItem>
                  <TableItem notes="inject everything prefixed, all rules">
                    <Rank rank="o">
                      o
                    </Rank>
                  </TableItem>
                  <TableItem notes="optimized for small output, only inject used rules">
                    <Rank rank="++">
                      ++
                    </Rank>
                  </TableItem>
                  <TableItem notes="generate by rules and not sheets">
                    <Rank rank="+">
                      +
                    </Rank>
                  </TableItem>
                  <TableItem
                    notes={`
                      inject all rules, but can use Aphrodite approach too,
                      prefix at runtime`
                    }
                  >
                    <Rank rank="+">
                      +
                    </Rank>
                  </TableItem>
                  <TableItem notes="inject all rules,">
                    <Rank rank="o">
                      o
                    </Rank>
                  </TableItem>
                </TableRow>
              </Appear>
            </tbody>
          </Table>
        </Slide>
        <Slide
          notes={`
            - Great Performance
            - CSS Power
            - Debug
            - No external dependency
          `}
        >
          <Heading size={5}>
            {'JSS to the rescue'}
          </Heading>
          <br />
          <CodePane
            lang="js"
            source={require('raw!../assets/jss.js.example')}
            textSize="0.5em"
          />
          <br />
          <CodePane
            lang="jsx"
            source={require('raw!../assets/jss.jsx.example')}
            textSize="0.5em"
          />
        </Slide>
        <Slide
          bgColor="#111111"
          notes={`
            Powerful model. Low level API.
            We can implement Aphrodite API with JSS in few lines.
            We have added an abstraction for the theme and we only inject the used style at runtime.
          `}
        >
          <Link href="http://slides.com/kof/javascript-style-sheets#/24">
            <Image width="100%" src={images.behindTheHood} />
          </Link>
        </Slide>
        <Slide>
          <Heading size={4} lineHeight={2.4}>
            Limitation
          </Heading>
          <Text textAlign="left" lineHeight={1.2}>
            <strong>Cascading</strong>SS, the style inherits from the parent.
          </Text>
        </Slide>
        <Slide
          notes={`
            - Do I have to use JSS?
              Use it if that answers to problems you face.
            - Great JS perspectives with Houdini
            - Great CSS perspectives with WebComponent
            - Reuse your component and not your CSS classes.
          `}
        >
          <Heading size={4}>
            To sum up
          </Heading>
          <List>
            <ListItem>
              <Text textSize="2rem" lineHeight={1.4}>
                CSS is not particularly adapted to the need of apps.
              </Text>
            </ListItem>
            <ListItem>
              <Text textSize="2rem" lineHeight={1.4}>
                {'The inline-style has many advantages, disadvantages can be partially circumvented.'}
              </Text>
            </ListItem>
            <ListItem>
              <Text textSize="2rem" lineHeight={1.4}>
                The CSS-in-JS is probably the future.
              </Text>
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={4} lineHeight={2.5} >
            Thank you! Questions?
          </Heading>
          <Link href="https://twitter.com/olivtassinari">
            <Text textColor={materialPrimary}>
              @olivtassinari
            </Text>
          </Link>
        </Slide>
      </Deck>
    </Spectacle>
  );
};

export default Presentation;
