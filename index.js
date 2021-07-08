const twitter = "https://twitter.com/Sahil_Fruitwala";
const linkedin = "https://www.linkedin.com/in/sahilfruitwala/";
const github = "https://github.com/SahilFruitwala";

const logData = (option) => {
    option === 1
    ? console.log(`Twitter: ${twitter}`)
    : option === 2
    ? console.log(`LinkeIn: ${linkedin}`)
    : option === 3
    ? console.log(`GitHub: ${github}`)
    : console.log(`Enter Valid Input!`);
};

module.exports = logData;
