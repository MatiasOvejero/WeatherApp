import React from "react";



const Weather = ({ description, city, country, error, temperature }) => {
  function matchValues () {
    if(description) {
        const weatherDescription = description.split(' ').join('')
        const keyWords = ['cloudy','clouds', 'cloud', 'overcast']
        const keyWordsSun = ['clearsky']
        const keyWordsRain = ['rain', 'moderate rain']
        const keyWordsSnow = ['snow', 'moderate snow']
        for(let i = 0; i < weatherDescription.length; i++) {
            if(keyWords.includes(weatherDescription[i])) {
                return <img src='https://www.quotemaster.org/images/5a/5aed04eac38dd9ad0450cfd9403b2654.jpg' />
            } else if (keyWordsSun.includes(weatherDescription.split(' ').join(''))) {
                return <img src='https://www.quotemaster.org/images/5a/5aed04eac38dd9ad0450cfd9403b2654.jpg'/>
              }
              else if (keyWordsRain.includes(weatherDescription[i])) {
                return <img src='https://pennalumniblog.files.wordpress.com/2012/01/rainy_day.jpg'/>
              }
              else if (keyWordsSnow.includes(weatherDescription[i])) {
                return <img src='https://thumbor-prd.zoover.cloud/unsafe/trim/600x/images/testimonials/original/00610000-00619999/T617250.jpg'/>
              };
              console.log(weatherDescription);
        }      
      }
  }
  return (
    <div>
      {city && country && (
        <p>
          {" "}
          {city}, {country}{" "}
        </p>
      )}
      {temperature && <p> {temperature} °F</p>}
      {description && <p>Conditions: {description} </p>}
      {error && <p> {error} </p>}
      {description && matchValues()}
    </div>
  );
};

export default Weather;
