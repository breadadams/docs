import markdown from 'markdown-in-js'
import MicrolinkCard from 'react-microlink'

import withDoc, { components } from '../../../lib/with-doc'

import { TerminalInput } from '../../../components/text/terminal'
import { InternalLink } from '../../../components/text/link'
import { Code } from '../../../components/text/code'
import { kiko } from '../../../lib/data/team'

// prettier-ignore
export default withDoc({
  title: 'React',
  date: '19 January 2018',
  authors: [kiko],
})(markdown(components)`

## Installation

It is available as a [npm package](https://www.npmjs.com/package/react-microlink):

${<TerminalInput>{`npm install react-microlink --save`}</TerminalInput>}

Then you can interact with him in your code as react component:

${<Code>{`import MicrolinkCard from 'react-microlink'

// Just provide a URL to create a card
<MicrolinkCard url='https://github.com' />

// Customizing the card
<MicrolinkCard url='https://reactjs.org' contrast />

// You can pass extra props
<MicrolinkCard url='https://stackoverflow.com' target='_blank' />
`}</Code>}

Check ${<InternalLink href="#static-deployment">API reference</InternalLink>} in order to know what options you can use.

## Styling

We don't inject any CSS in your application. The card previsualization is shipped with a default minimal inline style.

In order to make easy adapt *look and feel*, we provide different approach for customizing the style.

### Using CSS Selectors

Each component of the card has been assigned a [BEM](http://getbem.com/introduction) class name:

- **microlink_card**: The root \`div\` of the card.
- **microlink_card__image**: The wrapper \`div\` around the image preview of the link.
- **microlink_card__content**: The wrapper \`div\` around the content preview of the link.
- **microlink_card__content_title**: The \`p\` tag of the card title.
- **microlink_card__content_description**: The \`p\` tag of the card description.
- **microlink_card__content_url**: The \`span\` tag of the card url link.

This is the approach used for support customization using [CSS Modules](https://github.com/css-modules/css-modules) or similar approach on React ecosystem using CSS class names:

${<Code>{`<style>
  .microlink-card {
    font-family: 'Nitti, "Microsoft YaHei", 微软雅黑, monospace';
  }
</style>
`}</Code>}

### Using inline style

By default, the cards components are shipped with a default and minimal inline style.

The component accept a \`style\` property. You can use this property to specify your custom style, like:

${<Code>{`<MicrolinkCard
  url="https://vimeo.com/188175573"
  style={{fontFamily: 'Nitti, "Microsoft YaHei", 微软雅黑, monospace'}}
/>
`}</Code>}

Also, this is the approach used for more high level abstraction like [fela](http://fela.js.org), [styled components](https://www.styled-components.com) or similar built in styles solutions:

${<Code>{`import MicrolinkCard from 'react-microlink'
import styled from 'styled-components'

const myCustomCard = styled(MicrolinkCard)\`
  font-family: 'Nitti, "Microsoft YaHei", 微软雅黑, monospace';
  max-width: 100%;
\`
`}</Code>}

and voilá!

${<MicrolinkCard
  url="https://vimeo.com/188175573"
  style={{
    fontFamily: 'Nitti, "Microsoft YaHei", 微软雅黑, monospace',
    maxWidth: '100%'
  }}
/>}
`)
