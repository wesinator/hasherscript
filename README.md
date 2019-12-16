# Hasherscript
Browser userscript to get hashes of a plaintext file page using [crypto-api](https://github.com/nf404/crypto-api).

#### Example
 - https://releases.llvm.org/2.8/LICENSE.TXT
 
 `SHA256: 2050acfe8b8d5ae1ef971b6ab419cd9f46e3f2d779a09966105622b3112600d9`

#### Limitations
 - Non-text (`text/plain`) files have to be reloaded (re-requested) to get the accurate hash of original content
  - This means that dynamic pages will be reloaded and may have a different hash

  See [this page](retrieving_page_content_dom.md) for more info on why this limitation exists.

My own use-case for this was to hash plaintext files in the browser without requiring download.
