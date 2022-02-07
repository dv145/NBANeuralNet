let input, button, greeting;


function setup() {
  
  createCanvas(600, 400);
  background('#ff8c00')
  

  input = createInput();
  input.position(210, 190);

  button = createButton('submit');
  button.position(input.x + input.width, 190);
  button.mousePressed(submit);
  
  textAlign(CENTER);

  greeting = createElement('h2', 'Enter Player');
  greeting.position(240, 120);
  
  
  textAlign(CENTER);
  
  answer = createElement('h2', '');
  answer.position(10, 200);

  textAlign(CENTER);
  textSize(100);
  textFont('Georgia')
}

function submit() {
  const name = makeValidName(input.value().toString());
  answer.html(name + '\'s predicted Points Per Game for 2022 is ' + getPPG(name));
  input.value('');


}

function makeValidName(name){

  name2 = name.charAt(0).toUpperCase() + name.substring(1, name.length)
  
  for (let i = 0; i < name2.length; i++){
    
    if(name2.charAt(i)==" "){
      name2 = name2.substring(0, i+1) + name2.charAt(i+1).toUpperCase() + name2.substring(i+2, name.length)
    }
    

  }
  

  
  return name2 
  
}

function getPPG(name){
  data = getData()
  
  for(let i = 0; i<=590; i++){
    
    if (data[0][i]==name){
      return data[1][i].toFixed(2)
    }
    
  }
  
  return 'NA'
}

function getData(){
  
  strData = {"0":{"0":"Steven Adams","1":"Bam Adebayo","2":"LaMarcus Aldridge","3":"Kyle Alexander","4":"Nickeil Alexander-Walker","5":"Grayson Allen","6":"Jarrett Allen","7":"Kadeem Allen","8":"Al-Farouq Aminu","9":"Justin Anderson","10":"Kyle Anderson","11":"Ryan Anderson","12":"Giannis Antetokounmpo","13":"Kostas Antetokounmpo","14":"Thanasis Antetokounmpo","15":"Carmelo Anthony","16":"OG Anunoby","17":"Ryan Arcidiacono","18":"Trevor Ariza","19":"Trevor Ariza","20":"D.J. Augustin","21":"Deandre Ayton","22":"Dwayne Bacon","23":"Marvin Bagley III","24":"Lonzo Ball","25":"Mo Bamba","26":"J.J. Barea","27":"Harrison Barnes","28":"RJ Barrett","29":"Will Barton","30":"Keita Bates-Diop","31":"Keita Bates-Diop","32":"Nicolas Batum","33":"Aron Baynes","34":"Kent Bazemore","35":"Kent Bazemore","36":"Darius Bazley","37":"Bradley Beal","38":"Malik Beasley","39":"Malik Beasley","40":"Marco Belinelli","41":"Jordan Bell","42":"Jordan Bell","43":"DeAndre' Bembry","44":"Dragan Bender","45":"Dragan Bender","46":"Davis Bertans","47":"Patrick Beverley","48":"Khem Birch","49":"Goga Bitadze","50":"Bismack Biyombo","51":"Nemanja Bjelica","52":"Eric Bledsoe","53":"Bojan Bogdanovic","54":"Bogdan Bogdanovic","55":"Bol Bol","56":"Jonah Bolden","57":"Jonah Bolden","58":"Marques Bolden","59":"Jordan Bone","60":"Isaac Bonga","61":"Devin Booker","62":"Chris Boucher","63":"Brian Bowen II","64":"Ky Bowman","65":"Avery Bradley","66":"Tony Bradley","67":"Jarrell Brantley","68":"Ignas Brazdeikis","69":"Corey Brewer","70":"Miles Bridges","71":"Mikal Bridges","72":"Oshae Brissett","73":"Ryan Broekhoff","74":"Malcolm Brogdon","75":"Dillon Brooks","76":"Charles Brown Jr.","77":"Troy Brown Jr.","78":"Bruce Brown","79":"Jaylen Brown","80":"Moses Brown","81":"Sterling Brown","82":"Jalen Brunson","83":"Thomas Bryant","84":"Reggie Bullock","85":"Trey Burke","86":"Trey Burke","87":"Alec Burks","88":"Alec Burks","89":"Deonte Burton","90":"Jimmy Butler","91":"Bruno Caboclo","92":"Bruno Caboclo","93":"Devontae Cacok","94":"Kentavious Caldwell-Pope","95":"Vlatko Cancar","96":"Clint Capela","97":"DeMarre Carroll","98":"DeMarre Carroll","99":"Wendell Carter Jr.","100":"Jevon Carter","101":"Vince Carter","102":"Michael Carter-Williams","103":"Alex Caruso","104":"Willie Cauley-Stein","105":"Willie Cauley-Stein","106":"Tyson Chandler","107":"Wilson Chandler","108":"Joe Chealey","109":"Zylan Cheatham","110":"Chris Chiozza","111":"Chris Chiozza","112":"Marquese Chriss","113":"Brandon Clarke","114":"Gary Clark","115":"Gary Clark","116":"Jordan Clarkson","117":"Jordan Clarkson","118":"Nicolas Claxton","119":"Chris Clemons","120":"Antonius Cleveland","121":"Amir Coffey","122":"John Collins","123":"Zach Collins","124":"Mike Conley","125":"Pat Connaughton","126":"Quinn Cook","127":"Tyler Cook","128":"Tyler Cook","129":"Robert Covington","130":"Robert Covington","131":"Allen Crabbe","132":"Allen Crabbe","133":"Torrey Craig","134":"Jamal Crawford","135":"Jae Crowder","136":"Jae Crowder","137":"Jarrett Culver","138":"Seth Curry","139":"Stephen Curry","140":"Troy Daniels","141":"Troy Daniels","142":"Anthony Davis","143":"Ed Davis","144":"Terence Davis","145":"Dewayne Dedmon","146":"Dewayne Dedmon","147":"Matthew Dellavedova","148":"DeMar DeRozan","149":"Cheick Diallo","150":"Hamidou Diallo","151":"Gorgui Dieng","152":"Gorgui Dieng","153":"Spencer Dinwiddie","154":"Donte DiVincenzo","155":"Luka Doncic","156":"Luguentz Dort","157":"Damyean Dotson","158":"Sekou Doumbouya","159":"PJ Dozier","160":"Goran Dragic","161":"Andre Drummond","162":"Andre Drummond","163":"Jared Dudley","164":"Kris Dunn","165":"Carsen Edwards","166":"Henry Ellenson","167":"Wayne Ellington","168":"Joel Embiid","169":"James Ennis III","170":"James Ennis III","171":"Drew Eubanks","172":"Jacob Evans","173":"Jacob Evans","174":"Dante Exum","175":"Dante Exum","176":"Tacko Fall","177":"Derrick Favors","178":"Cristiano Felicio","179":"Terrance Ferguson","180":"Bruno Fernando","181":"Yogi Ferrell","182":"Dorian Finney-Smith","183":"Bryn Forbes","184":"Evan Fournier","185":"De'Aaron Fox","186":"Melvin Frazier Jr.","187":"Michael Frazier","188":"Tim Frazier","189":"Markelle Fultz","190":"Wenyen Gabriel","191":"Wenyen Gabriel","192":"Daniel Gafford","193":"Danilo Gallinari","194":"Langston Galloway","195":"Darius Garland","196":"Marc Gasol","197":"Rudy Gay","198":"Paul George","199":"Taj Gibson","200":"Harry Giles III","201":"Shai Gilgeous-Alexander","202":"Rudy Gobert","203":"Brandon Goodwin","204":"Aaron Gordon","205":"Eric Gordon","206":"Devonte' Graham","207":"Treveon Graham","208":"Treveon Graham","209":"Jerami Grant","210":"Jerian Grant","211":"Josh Gray","212":"Danny Green","213":"Draymond Green","214":"JaMychal Green","215":"Javonte Green","216":"Jeff Green","217":"Jeff Green","218":"Blake Griffin","219":"Marko Guduric","220":"Kyle Guy","221":"Rui Hachimura","222":"Devon Hall","223":"Donta Hall","224":"Donta Hall","225":"Dusty Hannahs","226":"Tim Hardaway Jr.","227":"James Harden","228":"Maurice Harkless","229":"Maurice Harkless","230":"Jared Harper","231":"Montrezl Harrell","232":"Gary Harris","233":"Joe Harris","234":"Shaquille Harrison","235":"Tobias Harris","236":"Isaiah Hartenstein","237":"Josh Hart","238":"Udonis Haslem","239":"Jaxson Hayes","240":"Gordon Hayward","241":"John Henson","242":"John Henson","243":"Dewan Hernandez","244":"Juancho Hernangomez","245":"Juancho Hernangomez","246":"Willy Hernangomez","247":"Tyler Herro","248":"Kevin Hervey","249":"Mario Hezonja","250":"Buddy Hield","251":"George Hill","252":"Solomon Hill","253":"Solomon Hill","254":"Jaylen Hoard","255":"Aaron Holiday","256":"Jrue Holiday","257":"Justin Holiday","258":"Rondae Hollis-Jefferson","259":"Richaun Holmes","260":"Rodney Hood","261":"Al Horford","262":"Talen Horton-Tucker","263":"Danuel House Jr.","264":"Dwight Howard","265":"William Howard","266":"Kevin Huerter","267":"De'Andre Hunter","268":"Chandler Hutchison","269":"Serge Ibaka","270":"Andre Iguodala","271":"Ersan Ilyasova","272":"Joe Ingles","273":"Brandon Ingram","274":"Kyrie Irving","275":"Jonathan Isaac","276":"Wes Iwundu","277":"Jaren Jackson Jr.","278":"Frank Jackson","279":"Josh Jackson","280":"Justin Jackson","281":"Reggie Jackson","282":"Reggie Jackson","283":"Justin James","284":"LeBron James","285":"Amile Jefferson","286":"DaQuan Jeffries","287":"Ty Jerome","288":"Alize Johnson","289":"BJ Johnson","290":"Cameron Johnson","291":"James Johnson","292":"James Johnson","293":"Keldon Johnson","294":"Stanley Johnson","295":"Tyler Johnson","296":"Tyler Johnson","297":"Nikola Jokic","298":"Derrick Jones Jr.","299":"Damian Jones","300":"Tyus Jones","301":"DeAndre Jordan","302":"Cory Joseph","303":"Mfiondu Kabengele","304":"Frank Kaminsky","305":"Enes Kanter","306":"Luke Kennard","307":"Michael Kidd-Gilchrist","308":"Michael Kidd-Gilchrist","309":"Stanton Kidd","310":"Louis King","311":"Maxi Kleber","312":"Brandon Knight","313":"Brandon Knight","314":"Kevin Knox II","315":"John Konchar","316":"Furkan Korkmaz","317":"Luke Kornet","318":"Kyle Korver","319":"Rodions Kurucs","320":"Kyle Kuzma","321":"Skal Labissiere","322":"Jeremy Lamb","323":"Romeo Langford","324":"Zach LaVine","325":"Vic Law","326":"Jake Layman","327":"TJ Leaf","328":"Jalen Lecque","329":"Courtney Lee","330":"Damion Lee","331":"Alex Len","332":"Alex Len","333":"Kawhi Leonard","334":"Meyers Leonard","335":"Caris LeVert","336":"Damian Lillard","337":"Nassir Little","338":"Kevon Looney","339":"Brook Lopez","340":"Robin Lopez","341":"Kevin Love","342":"Kyle Lowry","343":"Timothe Luwawu-Cabarrot","344":"Trey Lyles","345":"Daryl Macon","346":"J.P. Macura","347":"Josh Magette","348":"Ian Mahinmi","349":"Thon Maker","350":"Terance Mann","351":"Boban Marjanovic","352":"Lauri Markkanen","353":"Caleb Martin","354":"Cody Martin","355":"Jeremiah Martin","356":"Kelan Martin","357":"Frank Mason","358":"Garrison Mathews","359":"Wesley Matthews","360":"Luc Mbah a Moute","361":"Patrick McCaw","362":"CJ McCollum","363":"T.J. McConnell","364":"Jalen McDaniels","365":"Doug McDermott","366":"JaVale McGee","367":"Rodney McGruder","368":"Alfonzo McKinnie","369":"Jordan McLaughlin","370":"Ben McLemore","371":"Jordan McRae","372":"Jordan McRae","373":"Jordan McRae","374":"Nicolo Melli","375":"De'Anthony Melton","376":"Chimezie Metu","377":"Khris Middleton","378":"Eric Mika","379":"CJ Miles","380":"Malcolm Miller","381":"Paul Millsap","382":"Patty Mills","383":"Shake Milton","384":"Donovan Mitchell","385":"Naz Mitrou-Long","386":"Adam Mokoka","387":"Malik Monk","388":"Matt Mooney","389":"E'Twaun Moore","390":"Ja Morant","391":"Juwan Morgan","392":"Marcus Morris Sr.","393":"Marcus Morris Sr.","394":"Markieff Morris","395":"Markieff Morris","396":"Monte Morris","397":"Johnathan Motley","398":"Emmanuel Mudiay","399":"Mychal Mulder","400":"Dejounte Murray","401":"Jamal Murray","402":"Dzanan Musa","403":"Mike Muscala","404":"Svi Mykhailiuk","405":"Abdel Nader","406":"Larry Nance Jr.","407":"Shabazz Napier","408":"Shabazz Napier","409":"Raul Neto","410":"Malik Newman","411":"Georges Niang","412":"Joakim Noah","413":"Nerlens Noel","414":"Zach Norvell Jr.","415":"Zach Norvell Jr.","416":"Jaylen Nowell","417":"Frank Ntilikina","418":"Kendrick Nunn","419":"Jusuf Nurkic","420":"David Nwaba","421":"Semi Ojeleye","422":"Jahlil Okafor","423":"Elie Okobo","424":"Josh Okogie","425":"KZ Okpala","426":"Victor Oladipo","427":"Kelly Olynyk","428":"Royce O'Neale","429":"Miye Oni","430":"Kyle O'Quinn","431":"Cedi Osman","432":"Kelly Oubre Jr.","433":"Tariq Owens","434":"Jeremy Pargo","435":"Jabari Parker","436":"Jabari Parker","437":"Chandler Parsons","438":"Eric Paschall","439":"Anzejs Pasecniks","440":"Patrick Patterson","441":"Justin Patton","442":"Chris Paul","443":"Cameron Payne","444":"Gary Payton II","445":"Elfrid Payton","446":"Norvel Pelle","447":"Theo Pinson","448":"Mason Plumlee","449":"Jakob Poeltl","450":"Vincent Poirier","451":"Shamorie Ponds","452":"Jordan Poole","453":"Kevin Porter Jr.","454":"Michael Porter Jr.","455":"Otto Porter Jr.","456":"Bobby Portis","457":"Kristaps Porzingis","458":"Dwight Powell","459":"Norman Powell","460":"Taurean Prince","461":"Chasson Randle","462":"Julius Randle","463":"Josh Reaves","464":"Cam Reddish","465":"JJ Redick","466":"Naz Reid","467":"Josh Richardson","468":"Austin Rivers","469":"Andre Roberson","470":"Glenn Robinson III","471":"Glenn Robinson III","472":"Duncan Robinson","473":"Jerome Robinson","474":"Jerome Robinson","475":"Justin Robinson","476":"Mitchell Robinson","477":"Isaiah Roby","478":"Rajon Rondo","479":"Derrick Rose","480":"Terrence Ross","481":"Terry Rozier","482":"Ricky Rubio","483":"D'Angelo Russell","484":"D'Angelo Russell","485":"Domantas Sabonis","486":"Luka Samanic","487":"JaKarr Sampson","488":"Dario Saric","489":"Tomas Satoransky","490":"Admiral Schofield","491":"Dennis Schroder","492":"Mike Scott","493":"Thabo Sefolosha","494":"Collin Sexton","495":"Landry Shamet","496":"Marial Shayok","497":"Iman Shumpert","498":"Pascal Siakam","499":"Chris Silva","500":"Ben Simmons","501":"Anfernee Simons","502":"Alen Smailagic","503":"Marcus Smart","504":"Dennis Smith Jr.","505":"Ish Smith","506":"JR Smith","507":"Zhaire Smith","508":"Tony Snell","509":"Omari Spellman","510":"Max Strus","511":"Edmond Sumner","512":"Caleb Swanigan","513":"Caleb Swanigan","514":"Jayson Tatum","515":"Jeff Teague","516":"Jeff Teague","517":"Garrett Temple","518":"Daniel Theis","519":"Isaiah Thomas","520":"Khyri Thomas","521":"Lance Thomas","522":"Matt Thomas","523":"Tristan Thompson","524":"Sindarius Thornwell","525":"Matisse Thybulle","526":"Anthony Tolliver","527":"Anthony Tolliver","528":"Anthony Tolliver","529":"Juan Toscano-Anderson","530":"Karl-Anthony Towns","531":"Gary Trent Jr.","532":"Allonzo Trier","533":"P.J. Tucker","534":"Rayjon Tucker","535":"Evan Turner","536":"Myles Turner","537":"Jarrod Uthoff","538":"Jarrod Uthoff","539":"Jonas Valanciunas","540":"Denzel Valentine","541":"Jarred Vanderbilt","542":"Jarred Vanderbilt","543":"Fred VanVleet","544":"Gabe Vincent","545":"Noah Vonleh","546":"Noah Vonleh","547":"Nikola Vucevic","548":"Dean Wade","549":"Moritz Wagner","550":"Dion Waiters","551":"Dion Waiters","552":"Lonnie Walker IV","553":"Kemba Walker","554":"Tyrone Wallace","555":"Derrick Walton Jr.","556":"Derrick Walton Jr.","557":"Brad Wanamaker","558":"T.J. Warren","559":"P.J. Washington","560":"Yuta Watanabe","561":"Tremont Waters","562":"Paul Watson","563":"Paul Watson","564":"Quinndary Weatherspoon","565":"Russell Westbrook","566":"Coby White","567":"Derrick White","568":"Hassan Whiteside","569":"Andrew Wiggins","570":"Andrew Wiggins","571":"Robert Williams III","572":"Nigel Williams-Goss","573":"Grant Williams","574":"Johnathan Williams","575":"Kenrich Williams","576":"Lou Williams","577":"Marvin Williams","578":"Marvin Williams","579":"Zion Williamson","580":"D.J. Wilson","581":"Justise Winslow","582":"Christian Wood","583":"Delon Wright","584":"Justin Wright-Foreman","585":"Thaddeus Young","586":"Trae Young","587":"Cody Zeller","588":"Tyler Zeller","589":"Ante Zizic","590":"Ivica Zubac"},"1":{"0":6.03492811,"1":19.82037737,"2":8.85186998,"3":0.92506785,"4":11.16173115,"5":8.57204457,"6":6.65767836,"7":0.92506785,"8":2.06414878,"9":0.92506785,"10":12.59244889,"11":0.92506785,"12":27.49878879,"13":3.0583241,"14":4.5032065,"15":13.71726802,"16":12.34021304,"17":3.52779749,"18":5.09218405,"19":5.09218405,"20":3.66464564,"21":15.10199895,"22":11.20689717,"23":13.03017305,"24":13.12270419,"25":8.17962339,"26":0.92506785,"27":12.5157542,"28":18.56946335,"29":11.76880449,"30":3.25199817,"31":3.25199817,"32":7.5863445,"33":5.39042899,"34":7.14300837,"35":7.14300837,"36":11.81260693,"37":28.2949904,"38":15.69070561,"39":15.69070561,"40":0.92506785,"41":2.52726321,"42":2.52726321,"43":5.22252484,"44":0.92506785,"45":0.92506785,"46":8.43256532,"47":5.54271956,"48":3.19677544,"49":5.71464101,"50":5.09760928,"51":4.91462459,"52":11.58301531,"53":17.18569995,"54":14.08073437,"55":5.23033713,"56":0.92506785,"57":0.92506785,"58":2.12319162,"59":2.77870632,"60":3.54373201,"61":28.49149642,"62":13.39613273,"63":1.52515605,"64":0.92506785,"65":3.47399152,"66":2.74049093,"67":3.90436714,"68":1.47091658,"69":0.92506785,"70":12.18243826,"71":13.15455359,"72":6.10625782,"73":0.92506785,"74":19.80531049,"75":17.77641118,"76":0.92506785,"77":3.14826971,"78":9.74840174,"79":25.77129206,"80":6.00181323,"81":5.39056314,"82":13.60658499,"83":6.97758623,"84":9.32582775,"85":8.84097779,"86":8.84097779,"87":11.31503854,"88":11.31503854,"89":0.92506785,"90":20.93173921,"91":2.09389773,"92":2.09389773,"93":2.90883406,"94":8.4463325,"95":4.20945957,"96":15.45752407,"97":0.92506785,"98":0.92506785,"99":8.47374162,"100":6.40103822,"101":0.92506785,"102":5.88340993,"103":6.04796799,"104":5.03888347,"105":5.03888347,"106":0.92506785,"107":0.92506785,"108":0.92506785,"109":0.92506785,"110":4.75180049,"111":4.75180049,"112":3.13365507,"113":9.75287077,"114":3.15804073,"115":3.15804073,"116":21.53395818,"117":21.53395818,"118":5.2652508,"119":0.92506785,"120":0.92506785,"121":4.86600929,"122":17.93808888,"123":0.92506785,"124":14.94525613,"125":6.57333091,"126":2.19795013,"127":2.12936744,"128":2.12936744,"129":7.97564569,"130":7.97564569,"131":0.92506785,"132":0.92506785,"133":2.50676631,"134":0.92506785,"135":9.46222784,"136":9.46222784,"137":4.56247243,"138":10.05047692,"139":28.08820264,"140":0.92506785,"141":0.92506785,"142":20.34204318,"143":1.88830547,"144":6.95970596,"145":4.32588669,"146":4.32588669,"147":2.11771142,"148":20.80225128,"149":0.92506785,"150":8.59439958,"151":4.10921255,"152":4.10921255,"153":3.04297068,"154":10.31332215,"155":29.58043757,"156":11.41459199,"157":5.57556668,"158":6.76013474,"159":8.45322483,"160":12.21121632,"161":16.66129723,"162":16.66129723,"163":1.82821769,"164":1.81667861,"165":4.89090724,"166":3.01217355,"167":6.63658426,"168":27.49641325,"169":4.47753031,"170":4.47753031,"171":6.71565058,"172":0.92506785,"173":0.92506785,"174":2.3962205,"175":2.3962205,"176":2.68353048,"177":7.32436492,"178":2.67857145,"179":1.79770231,"180":4.18036476,"181":4.55201026,"182":8.25986012,"183":10.58682422,"184":15.28606631,"185":26.18355529,"186":0.92506785,"187":0.92506785,"188":2.34134519,"189":8.51013735,"190":3.21201891,"191":3.21201891,"192":3.25968493,"193":11.85031727,"194":5.42748716,"195":16.44725472,"196":2.89509777,"197":11.67790138,"198":24.58147758,"199":2.61592828,"200":4.31972302,"201":20.1705139,"202":15.04805437,"203":6.88899808,"204":10.63257889,"205":12.39533105,"206":13.09472531,"207":0.92506785,"208":0.92506785,"209":21.62303701,"210":0.92506785,"211":0.92506785,"212":8.31221995,"213":5.99449363,"214":8.80030444,"215":2.97653449,"216":9.98397667,"217":9.98397667,"218":7.1127387,"219":0.92506785,"220":4.06670924,"221":11.01034595,"222":0.92506785,"223":2.2342744,"224":2.2342744,"225":0.92506785,"226":17.2340805,"227":19.04512444,"228":2.51809698,"229":2.51809698,"230":0.5472642,"231":15.11056169,"232":5.33581976,"233":12.57677553,"234":3.11559317,"235":18.77491484,"236":5.01838556,"237":6.76641405,"238":4.55711761,"239":8.64056668,"240":16.67982734,"241":0.92506785,"242":0.92506785,"243":0.92506785,"244":6.44977021,"245":6.44977021,"246":6.9541686,"247":15.18311497,"248":0.92506785,"249":0.92506785,"250":15.4107762,"251":3.77421096,"252":4.76457302,"253":4.76457302,"254":2.67602941,"255":8.80839423,"256":16.00269144,"257":9.01132075,"258":2.90474692,"259":12.70233941,"260":4.13142238,"261":8.03259892,"262":11.06525739,"263":4.85442894,"264":8.9942695,"265":0.92506785,"266":12.32013454,"267":11.47930597,"268":3.1707707,"269":9.79436767,"270":3.66503824,"271":2.63581918,"272":11.25568311,"273":24.30838073,"274":26.49781774,"275":0.92506785,"276":3.4200274,"277":11.34520406,"278":8.81644831,"279":14.67418409,"280":4.98381856,"281":11.73829774,"282":11.73829774,"283":4.90428144,"284":23.31022385,"285":0.92506785,"286":3.1352681,"287":6.65327169,"288":4.5938506,"289":0.92506785,"290":10.19508732,"291":3.85671748,"292":3.85671748,"293":13.08254872,"294":5.21052819,"295":4.33404711,"296":4.33404711,"297":27.37908013,"298":6.94128531,"299":2.90614781,"300":8.4191885,"301":6.56540883,"302":4.81754043,"303":3.63620369,"304":7.71689272,"305":12.96263504,"306":9.80833796,"307":0.92506785,"308":0.92506785,"309":0.92506785,"310":4.05036754,"311":5.24880105,"312":0.92506785,"313":0.92506785,"314":4.91086004,"315":3.43321601,"316":9.77769591,"317":2.50920129,"318":0.92506785,"319":3.37865694,"320":12.70795172,"321":0.92506785,"322":7.13234399,"323":3.45004054,"324":26.51014187,"325":0.92506785,"326":3.81113278,"327":0.92506785,"328":1.04308904,"329":0.92506785,"330":4.8775148,"331":2.51947335,"332":2.51947335,"333":25.08742666,"334":2.87833024,"335":17.66400921,"336":27.95414232,"337":5.66278852,"338":4.00109566,"339":11.18677211,"340":9.0066197,"341":7.89279179,"342":13.27557371,"343":8.05796716,"344":2.87805739,"345":0.92506785,"346":0.92506785,"347":0.92506785,"348":0.92506785,"349":2.64685306,"350":8.84539237,"351":6.34559163,"352":11.8428431,"353":5.86391985,"354":3.95256548,"355":1.62268627,"356":5.01961042,"357":2.56524923,"358":4.4853691,"359":3.22046327,"360":0.92506785,"361":2.46739599,"362":22.21864261,"363":9.04374393,"364":7.03691538,"365":12.52999931,"366":6.90164992,"367":2.73946456,"368":3.41002387,"369":3.94372135,"370":5.48445457,"371":0.92506785,"372":0.92506785,"373":0.92506785,"374":2.81154303,"375":8.96557734,"376":6.36757313,"377":20.34870681,"378":0.92506785,"379":0.92506785,"380":0.92506785,"381":8.85021575,"382":10.05185601,"383":14.27406904,"384":28.13889328,"385":0.92506785,"386":3.14678794,"387":11.28327091,"388":0.92506785,"389":4.09660708,"390":20.13899777,"391":3.95524687,"392":12.56356489,"393":12.56356489,"394":6.63450803,"395":6.63450803,"396":9.11555548,"397":0.92506785,"398":0.92506785,"399":5.79867345,"400":16.47883471,"401":20.61923718,"402":0.92506785,"403":6.07911605,"404":6.02794295,"405":5.9259305,"406":4.99495702,"407":0.92506785,"408":0.92506785,"409":7.62591875,"410":0.92506785,"411":9.34098401,"412":0.92506785,"413":4.85389421,"414":0.92506785,"415":0.92506785,"416":8.27935085,"417":3.92134045,"418":13.31568695,"419":10.9219723,"420":4.86691501,"421":4.50966756,"422":3.5416226,"423":0.92506785,"424":4.69064139,"425":4.008839,"426":15.16613777,"427":7.88470719,"428":6.71365872,"429":4.14286846,"430":0.92506785,"431":9.91462346,"432":13.19932392,"433":0.92506785,"434":0.92506785,"435":2.71259387,"436":2.71259387,"437":0.92506785,"438":8.87469685,"439":-1.43267769,"440":4.24984204,"441":2.47991613,"442":17.73156126,"443":10.18169754,"444":1.78404361,"445":11.80567359,"446":1.77439645,"447":1.64616528,"448":9.05619197,"449":9.09662736,"450":2.52662252,"451":0.92506785,"452":12.05822849,"453":12.9385582,"454":19.10908047,"455":6.79204065,"456":12.79254659,"457":19.72607714,"458":6.01690413,"459":16.68990939,"460":5.05061988,"461":4.24196249,"462":25.59055119,"463":0.92506785,"464":9.13962118,"465":5.64889997,"466":13.48096941,"467":11.41667777,"468":4.32947805,"469":3.05147029,"470":2.93603009,"471":2.93603009,"472":12.34687104,"473":2.47819404,"474":2.47819404,"475":2.04063278,"476":4.88606826,"477":8.16292077,"478":2.51791142,"479":11.71342052,"480":12.51567757,"481":20.14769803,"482":8.3865393,"483":17.89348387,"484":17.89348387,"485":20.16026954,"486":4.68677262,"487":3.64158244,"488":10.42491515,"489":6.70534145,"490":0.92506785,"491":14.39463834,"492":3.29417817,"493":0.92506785,"494":24.56392008,"495":9.87399631,"496":0.92506785,"497":1.53482557,"498":20.72317651,"499":2.77279242,"500":13.42346039,"501":10.09646471,"502":2.80708362,"503":10.64036551,"504":1.73210826,"505":4.02811953,"506":0.92506785,"507":0.92506785,"508":3.56323443,"509":0.92506785,"510":6.05890469,"511":7.43533344,"512":0.92506785,"513":0.92506785,"514":27.42192655,"515":5.2234338,"516":5.2234338,"517":5.31238613,"518":6.95554638,"519":2.75246903,"520":8.91859005,"521":0.92506785,"522":3.2717262,"523":6.77299647,"524":2.49082374,"525":4.05030597,"526":1.86782199,"527":1.86782199,"528":1.86782199,"529":3.51983311,"530":23.80813647,"531":13.1511249,"532":0.92506785,"533":1.95509201,"534":2.75392771,"535":0.92506785,"536":9.27160525,"537":0.92506785,"538":0.92506785,"539":17.40058751,"540":8.04877708,"541":6.15546604,"542":6.15546604,"543":17.62943123,"544":6.57221788,"545":0.71484595,"546":0.71484595,"547":22.55498216,"548":5.86655091,"549":4.4231873,"550":0.92506785,"551":0.92506785,"552":11.33582061,"553":17.68331352,"554":0.92506785,"555":0.92506785,"556":0.92506785,"557":2.9762371,"558":8.72937187,"559":12.54323545,"560":3.89767247,"561":4.95502514,"562":3.0363827,"563":3.0363827,"564":2.99722353,"565":23.05734109,"566":15.5720848,"567":12.15721353,"568":7.58933183,"569":17.64819393,"570":17.64819393,"571":8.46094419,"572":0.92506785,"573":5.63111381,"574":0.92506785,"575":7.68758709,"576":12.25634142,"577":0.92506785,"578":0.92506785,"579":26.81676149,"580":2.30604478,"581":6.1697108,"582":17.87131855,"583":6.2929892,"584":0.92506785,"585":13.73673487,"586":27.62839232,"587":8.10982567,"588":0.92506785,"589":0.92506785,"590":11.31620769}}
  
  
  
  
  return strData;
  
}