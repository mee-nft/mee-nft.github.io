/** Connect to Moralis server */
const serverUrl = "https://55csctxgjtk5.usemoralis.com:2053/server";
const appId = "eCng0LLwVqhr9eRPok23CjceyfNl4L9X57JxyVpl";
Moralis.start({ serverUrl, appId });

/** Add from here down */
async function login() {
  let user = Moralis.User.current();
  if (!user) {
   try {
      user = await Moralis.authenticate({ signingMessage: "Hello World!" })
      console.log(user)
      console.log(user.get('ethAddress'))
   } catch(error) {
     console.log(error)
   }
  }
}

async function GetNFTs(
{
  const options = {chain: 'eth', address: '0x80a106cbc5c57d6ab2e33ea25b3b14ca9fafea44'};
  const nfts = await Moralis.Web3.getNFTs(options);

console.log(nfts);
}
  
async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}

GetNFTs();

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;

/** Useful Resources  */

// https://docs.moralis.io/moralis-server/users/crypto-login
// https://docs.moralis.io/moralis-server/getting-started/quick-start#user
// https://docs.moralis.io/moralis-server/users/crypto-login#metamask

/** Moralis Forum */

// https://forum.moralis.io/
