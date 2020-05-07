<?php

/*

author @edu

*/


// Get all the Category Names
$category = scandir(__DIR__ . '/trivia/trivia/', 1);

// We substract the .DS_Store, ".." and "." from the count since they are not
// actual categories
$count = sizeof($category)-3;

// This is out main array. It is created with the size of the amount of categories
// we have in a folder. This is very useful since it allows us to not worry if
// the user creates a new folder with new Q&As
$trivia[$count];

// We create the base for our directory String
$dir = "trivia/trivia/";

for($i =0; $i<$count; $i++) {

  // Creates a string with the directory of the first category
  // for example: "trivia/trivia/astronomy/*.txt"
  $dir = $dir.$category[$i]."/*.txt";

  // This array has all the text files
  $testcounting = glob($dir);

  // We create 2 arryas of questions and answers to fill them up as we
  // read the .txt files. We will then use them to fill out main array
  $qs[sizeof($testcounting)];
  $as[sizeof($testcounting)];

  $trivia[$i]["CategoryName"] = $category[$i];

  // Creates an array of all the questions and answers of the category
  for($j = 0; $j<sizeof($testcounting); $j++) {

    // We read the text
    $info = file($testcounting[$j], FILE_IGNORE_NEW_LINES);

    // We add an question to our Questions array
    $qs[$j] = array(
      "Question" => $info[0],
    );

    // We add an answer to our Answers array
    $as[$j] = array(
      "Answer" => $info[1],
    );
  }

  // We add the questions and Answers to our main array
  $trivia[$i]["Question"] = $qs;
  $trivia[$i]["Answer"] = $as;

  // We reset the Question and Answer Arrays
  $qs = array();
  $as = array();

  // We reset the adress before the next loop
  $dir = "trivia/trivia/";
}

// We echo all the trivia info as a JSON and create a file
$JSON = json_encode($trivia, JSON_PRETTY_PRINT);
echo $JSON;
$myfile = fopen("trivia.json", "w") or die("nope");

fwrite($myfile, $JSON);


// This is the example output of this program with the questions and answers
// given by Ms. Xiao.

/*

[
  {
    "CategoryName": "random",
    "Question": [
      { "Question": "Q: If you were to spell out numbers, how far would you have to go until you would find the letter \"A\"?" },
      { "Question": "Q: On which day are there more collect calls than any other day of the year (in the US)?" }
    ],
    "Answer": [
      { "Answer": "A: One thousand" },
      { "Answer": "A: Father's Day" }
    ]
  },
  {
    "CategoryName": "pokemon",
    "Question": [
      { "Question": "Q: What Pokemon comes first in the Pokedex?" },
      { "Question": "Q: Who gave Ash his Pikachu?" },
      { "Question": "Q: What is the name of all the nurses on Pokemon?" },
      { "Question": "Q: What Gym Trainer looks like their eyes are shut?" },
      { "Question": "Q: What is Ash's hometown called?" },
      { "Question": "Q: What is the name of the egg-thingy Pokemon that Misty carries around?" },
      { "Question": "Q: What evolution stone can turn an Eevee into a Vaporeon?" }
    ],
    "Answer": [
      { "Answer": "A: Bulbasaur" },
      { "Answer": "A: Professor Oak" },
      { "Answer": "A: Nurse Joy" },
      { "Answer": "A: Brock"
      { "Answer": "A: Pallet Town" },
      { "Answer": "A: Togepi" },
      { "Answer": "A: Water Stone" }
    ]
  },
  {
    "CategoryName": "internet",
    "Question": [
      { "Question": "Q: What does HTML stand for?" },
      { "Question": "Q: Which transport-layer protocol provides no handshake (and thus, no guarantee of delivery, etc) leading to increased unreliability along with the advantage of faster speeds?" },
      { "Question": "Q: This WikiLeaks-aided former NSA contractor releases classified military documents over the internet" },
      { "Question": "Q: In what year did Apple release the iPad?" },
      { "Question": "Q: In what year did Microsoft release the Bing search engine?" },
      { "Question": "Q: In what year did Google release the Chrome web browser?" },
      { "Question": "Q: Which auction site appeared in its first incarnation as a site called AuctionWeb in 1995?" },
      { "Question": "Q: In what year was Wikipedia launched?" },
      { "Question": "Q: What does PHP stand for?" }
    ],
    "Answer": [
      { "Answer": "A: Hyper-Text Markup Language" },
      { "Answer": "A: UDP (User Datagram Protocol)" },
      { "Answer": "A: Edward Snowden" },
      { "Answer": "A: 2010" },
      { "Answer": "A: 2009" },
      { "Answer": "A: 2008" },
      { "Answer": "A: eBay" },
      { "Answer": "A: 2001" },
      { "Answer": "A: Pre-hypertext processor" }
    ]
  },
  {
    "CategoryName": "history",
    "Question": [
      {"Question": "Q: How many Kings of Rome were there before the Republic?" },
      { "Question": "Q: Where was siaʔɬ (\"Chief Seattle\") born?" },
      { "Question": "Q: Where was siaʔɬ (\"Chief Seattle\") buried?" },
      { "Question": "Q: Who gave the famous speech at the end of the Nez Perce war which concludes \"from where the sun now stands I will fight no more forever.\"?" },
      { "Question": "Q: What was the first of H.J. Heinz' \"57 varieties\"?" },
      { "Question": "Q: As of 2017, which U.S. state has the highest percentage of people who walk to work?" },
      { "Question": "Q: In what year did Norman conquest of England occur?" },
      { "Question": "Q: In what year was the first Apple computer released?" }
    ],
    "Answer": [
      { "Answer": "A: Seven (Romulus, Numa, Tullus, Ancus Marcius, Lucus Tarquinius (first Etruscan king), Servius Tullius, Lucius Tarquinius Superbus)" },
      { "Answer": "A: Blake Island" },
      { "Answer": "A: Suquamish tribal cemetary on Bainbridge Island" },
      { "Answer": "A: Hinmatóowyalahtq'it of the Nez Perce (\"Chief Joseph\")" },
      { "Answer": "A: Horseradish (1869)" },
      { "Answer": "A: Alaska" },
      { "Answer": "A: 1066 A.D." },
      { "Answer": "A: 1976" }
    ]
  },
  {
    "CategoryName": "culture",
    "Question": [
      { "Question": "Q: What milk product did the U.S. Agriculture Department propose as a substitute for meat in school lunches, in 1996?" },
      { "Question": "Q: How many flowers are in the design stamped on each side of a classic Oreo cookie?" },
      { "Question": "Q: Black-eyed peas are not peas. What are they?" },
      { "Question": "Q: What was the name of Cheerios when it was first marketed 50 years ago?" },
      { "Question": "Q: What nation produces two thirds of the world's vanilla?" }
    ],
    "Answer": [
      { "Answer": "A: Yogurt" },
      { "Answer": "A: Twelve; each has four petals" },
      { "Answer": "A: Beans" },
      { "Answer": "A: Cheerioats" },
      { "Answer": "A: Madagascar" }
    ]
  },
  {
    "CategoryName": "computerscience",
    "Question": [
      { "Question": "Q: How many nodes are in a complete binary tree of height N?" },
      { "Question": "Q: What year was Facebook founded?" },
      { "Question": "Q: How do you declare a variable in JavaScript?" },
      { "Question": "Q: What does DOM stand for?" },
      { "Question": "Q: What does PHP stand for?" },
      { "Question": "Q: What does AJAX stand for?" },
      { "Question": "Q: In the CSS color property, what does \"RGB\" stand for?" },
      { "Question": "Q: What does HTML stand for?" },
      { "Question": "Q: What does CSS stand for?" },
      { "Question": "Q: In what year was the first Apple computer released?" }
    ],
    "Answer": [
      { "Answer": "A: (2^N)-1" },
      { "Answer": "A: 2004" },
      { "Answer": "A: let, var (deprecated)" },
      { "Answer": "A: Document Object Model" },
      { "Answer": "A: Personal Home Page" },
      { "Answer": "A: Asynchronous Javacript and XML" },
      { "Answer": "A: Red Green Blue" },
      { "Answer": "A: Hypertext Markup Language" },
      { "Answer": "A: Cascading style sheets" },
      { "Answer": "A: 1976" }
    ]
  },
  {
    "CategoryName": "chemistry",
    "Question": [
      { "Question": "Q: Which element is represented as the letter \"K\" on the periodic table?" }
    ],
    "Answer": [
      { "Answer": "A: Krypton" }
    ]
  },
  {
    "CategoryName": "biology",
    "Question": [
      { "Question": "Q: The youngest branch of the plant family, the flowering plants, is called what?" },
      { "Question": "Q: The domestic chicken (Gallus gallus domesticus) is thought to have descended from which wild Indonesian bird?" },
      { "Question": "Q: In the description of biological cells, \"eukaryotes\" are contrasted with these, which exist without a nucleus." },
      { "Question": "Q: What is considered the “powerhouse” of the cell?" }
    ],
    "Answer": [
      { "Answer": "A: Angiosperms (encased seeds)" },
      { "Answer": "A: The Red Junglefowl" },
      { "Answer": "A: Prokaryotes" },
      { "Answer": "A: Mitochondria" }
    ]
  },
  {
    "CategoryName": "astronomy",
    "Question": [
      { "Question": "Q: What is the name of the telescope which has currently discovered over 4,000 exoplanets and exoplanet candidates in its namesake \"Field of View\"?" },
      { "Question": "Q: What is the largest planet in our solar system?" }
    ],
    "Answer": [
      { "Answer": "A: Kepler" },
      { "Answer": "A: Jupiter" }
    ]
  }
]



*/
?>
