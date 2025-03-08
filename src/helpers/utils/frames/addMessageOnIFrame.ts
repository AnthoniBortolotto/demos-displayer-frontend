export function addMessageOnIFrame(html: string, event: string): string {
    return html + `

  <script>
      document.addEventListener("${event}", () => {
          // comunication with parent window
          window.parent.postMessage('triggered Double Click', '*')
      });
  </script>
  `;
}
