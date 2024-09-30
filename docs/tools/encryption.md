# DES Encryption

<form id="des">
  <div>
    <div>
      <p>Encryption Text</p>
      <textarea id="plain-text" rows="5" placeholder="Plaintext"></textarea>
    </div>
    <div>
      <p>Secret Key</p>
      <input id="secret-key" placeholder="Secret Key"></input>
    </div>
  </div>
  <div>
    <div>
      <p>Encrypted Text (Read-only)</p>
      <textarea id="output" rows="5" placeholder="Ciphertext" readonly></textarea>
    </div>
    <div>
      <input id="des-encrypt" type="button" value="Encrypt"></input>
    </div>
  </div>
</form>

<script>
document.getElementById('des-encrypt').addEventListener('click', (event) => {
    const plainText = document.getElementById('plain-text').value;
    const secretKey = document.getElementById('secret-key').value;

    if(!plainText || !secretKey) {
        return;
    }

    const cipherText = 'ENCRYPTED.DES(' + CryptoJS.DES.encrypt(plainText, secretKey).toString() + ')';;
    document.getElementById('output').value = cipherText;
});
</script>

<style>
#des {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-evenly;
    gap: var(--size-3);
}

#des > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    flex: 1;
    gap: var(--size-3);
}

#des div div,
#des div div * {
    inline-size: -webkit-fill-available;
}
</style>
