(function () {
    const desEncrypt = () => {
        const plainText = document.getElementById('plain-text').value;
        const secretKey = document.getElementById('secret-key').value;

        if (!plainText || !secretKey) {
            return;
        }

        const cipherText = 'ENCRYPTED.DES(' + CryptoJS.DES.encrypt(plainText, secretKey).toString() + ')';;
        document.getElementById('cipher-text').value = cipherText;
    };

    document.getElementById('des-encrypt').addEventListener('click', desEncrypt);

    const desDecrypt = () => {
        const secretKey = document.getElementById('secret-key').value;
        const cipherText = document.getElementById('cipher-text').value;

        const matchResult = cipherText.match(/ENCRYPTED\.(\w+)\((\S+)\)/);

        if (matchResult) {
            const algorithm = matchResult[1];
            const content = matchResult[2];
            document.getElementById('plain-text').value = CryptoJS[algorithm].decrypt(content, secretKey).toString(CryptoJS.enc.Utf8);
        }
    };

    document.getElementById('des-decrypt').addEventListener('click', desDecrypt);
})();
