export function addMessageOnIFrame(html: string, event: string, message: string): string {
    return html + `

  <script>
      document.addEventListener("${event}", () => {
          // comunication with parent window
          window.parent.postMessage('${message}', '*')
      });
  </script>
  `;
}
