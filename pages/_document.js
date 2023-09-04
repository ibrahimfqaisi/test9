import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <script
            src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=initMap"
            async
            defer
          ></script>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
