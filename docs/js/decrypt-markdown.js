// https://www.clboy.cn/archives/docsify%E6%96%87%E6%A1%A3%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E6%8F%92%E4%BB%B6
// https://cryptojs.gitbook.io/docs#ciphers

/*
    const markdown = ``;
    const cipherText = 'ENCRYPTED.DES(' + CryptoJS.DES.encrypt(markdown, secretKey).toString() + ')';
 */

(function () {
    const decryptContent = (algorithm, content) => {
        if (!CryptoJS[algorithm]) {
            return "# 不支援該演算法";
        }
        const secretKey = prompt('請輸入密鑰：');
        try {
            return CryptoJS[algorithm].decrypt(content, secretKey).toString(CryptoJS.enc.Utf8);
        } catch (err) {
            return "# 解密失敗";
        }
    }

    window.$docsify.plugins = [].concat(window.$docsify.plugins, plugin);

    function plugin(hook, vm) {
        hook.beforeEach((markdown) => {
            // 格式： ENCRYPTED.加密演算法(密文)
            const matchResult = markdown.match(/ENCRYPTED\.(\w+)\((\S+)\)/);
            if (matchResult) {
                return decryptContent(matchResult[1], matchResult[2]);
            }
            return markdown;
        });
    }
})();
