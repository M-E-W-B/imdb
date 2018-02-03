// drop the existing
// insert then
db.movies.drop();
db.movies.insert([
  {
    genre: ["Adventure", "Biography", "Drama"],
    name: "Into the Wild",
    plot:
      "Based on a true story. After graduating from Emory University, Christopher McCandless abandoned his possessions, gave his entire savings account to charity, and hitchhiked to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters who shape his life.",
    runtime: 148,
    rating: 8.1
  },
  {
    genre: ["Action", "Comedy", "Sci-Fi"],
    name: "Wild Wild West",
    plot:
      "Jim West is a guns-a-blazing former Civil War hero. Artemus Gordon is an inventive U.S. Marshal who excels in disguise. When the United States is threatened by psychotic Confederate Arliss Loveless, President Ulysses Grant teams the duo up to bring him to justice. On a hazard-packed train journey from Washington D.C. to Utah, West and Gordon must combine their skills to best Loveless and his diabolical machines.",
    runtime: 106,
    rating: 4.8
  },
  {
    genre: ["Comedy", "Drama", "Thriller"],
    name: "Wild Tales",
    plot:
      "The film is divided into six segments. (1) 'Pasternak': While being on a plane, a model and a music critic realise they have a common acquaintance called Pasternak. Soon they discover that every passenger and crew member on board know Pasternak. Is this coincidence? (2) 'The Rats': A waitress recognizes her client - it's the loan shark who caused a tragedy in her family. The cook suggests mixing rat poison with his food, but the waitress refuses. The stubborn cook, however, decides to proceed with her plan. (3) 'The Strongest': Two drivers on a lone highway have an argument with tragic consequences. (4) 'Little Bomb': A demolition engineer has his car towed by a truck for parking in a wrong place and he has an argument with the employee of the towing company. This event destroys his private and professional life, and he plots revenge against the corrupt towing company and the city hall. (5) 'The Proposal': A reckless son of a wealthy family has an overnight hit-and-run accident, in which a pregnant woman gets killed. He wakes his parents up and his father calls the lawyer. The parents propose to pay the groundkeeper to take the blame for the boy. Soon the father discovers that he is a victim of extortion of his lawyer and the public prosecutor in charge of the investigation. What will be his decision? (6) 'Until Death Do Us Apart': During the wedding party, the bride discovers that her newlywed husband has been cheating on her with one of the guests, and she decides to pay him back.",
    runtime: 122,
    rating: 8.1
  },
  {
    genre: ["Action", "Adventure", "Comedy"],
    name: "Wild Hogs",
    plot:
      "Four middle-aged men decide to take a road trip from Cincinnati to the Pacific in order to get away from their lives which are leading them nowhere. Taking their motorcycles, these 'Wild Hogs' tear up the road and eventually stop in New Mexico for a drink not knowing that the bar belongs to the 'Del Fuegos', a mean biker gang. When the Del Fuegos steal a bike that belongs to the Wild Hogs, the four men form a plan to steal their bike back.",
    runtime: 100,
    rating: 5.9
  },
  {
    genre: ["Adventure", "Biography", "Drama"],
    name: "Wild",
    plot:
      "With the dissolution of her marriage and the death of her mother, Cheryl Strayed has lost all hope. After years of reckless, destructive behavior, she makes a rash decision. With absolutely no experience, driven only by sheer determination, Cheryl hikes more than a thousand miles of the Pacific Crest Trail, alone. Wild powerfully captures the terrors and pleasures of one young woman forging ahead against all odds on a journey that maddens, strengthen, and ultimately heals her.",
    runtime: 115,
    rating: 7.1
  },
  {
    genre: ["Crime", "Drama", "Mystery"],
    name: "Wild Things",
    plot:
      "In south Florida, a high school counselor is accused of rape by a manipulative rich girl and her trailer trash classmate. The cop on the case begins to suspect a conspiracy and dives into an elaborate and devious web of greed and betrayal to find the truth.",
    runtime: 108,
    rating: 6.5
  },
  {
    genre: ["Adventure", "Drama", "Family"],
    name: "Where the Wild Things Are",
    plot:
      "A young boy named Max has an active imagination, and he will throw fits if others don't go along with what he wants. Max - following an incident with Claire (his sister) and her friends, and following a tantrum which he throws as a result of his Mother paying more attention to her boyfriend than to him - runs away from home. Wearing his wolf costume at the time, Max not only runs away physically, but runs toward a world in his imagination. This world, an ocean away, is inhabited by large wild beasts, including one named Carol who is much like Max himself in temperament. Instead of eating Max like they normally would with creatures of his type, the wild things befriend Max after he proclaims himself a king who can magically solve all their problems.",
    runtime: 101,
    rating: 6.8
  },
  {
    genre: ["Adventure", "Drama", "Fantasy"],
    name: "Beasts of the Southern Wild",
    plot:
      "Hushpuppy, an intrepid six-year-old girl, lives with her father, Wink, in the Bathtub, a southern Delta community at the edge of the world. Wink's tough love prepares her for the unraveling of the universe; for a time when he's no longer there to protect her. When Wink contracts a mysterious illness, nature flies out of whack, temperatures rise, and the ice caps melt, unleashing an army of prehistoric creatures called aurochs. With the waters rising, the aurochs coming, and Wink's health fading, Hushpuppy goes in search of her lost mother.",
    runtime: 93,
    rating: 7.3
  },
  {
    genre: ["Drama", "Romance"],
    name: "Wild Strawberries",
    plot:
      "With the exception of his elderly housekeeper Miss Agda who he treats almost like a surrogate platonic wife, widowed seventy-eight year old Dr. Isak Borg, a former medical doctor and professor, has retreated from any human contact, partly his own want but partly the decision of others who do not want to spend time with him because of his cold demeanor. He is traveling from his home in Stockholm to Lund to accept an honorary degree. Instead of flying as was the original plan, he decides to take the day long drive instead. Along for the ride is his daughter-in-law Marianne, who had been staying with him for the month but has now decided to go home. The many stops and encounters along the way make him reminisce about various parts of his life. Those stops which make him reminisce directly are at his childhood summer home, at the home of his equally emotionally cold mother, and at a gas station where the attendants praise him as a man for his work. But the lives of other people they encounter almost mirror his own, including hitchhikers Sara, Viktor and Anders - who remind him of his cousin Sara who he was going to marry, himself and his irresponsible brother Sigfrid who Sara eventually married - a bickering married couple Sten and Berit Alman, and Marianne and her husband and Isak's son Evald, whose marriage is as strained as was his own.",
    runtime: 91,
    rating: 8.2
  },
  {
    genre: ["Comedy", "Crime", "Drama"],
    name: "Wild at Heart",
    plot:
      "Lula's psychopathic mother goes crazy at the thought of Lula being with Sailor, who just got free from jail. Ignoring Sailor's probation, they set out for California. However their mother hires a killer to hunt down Sailor. Unaware of this, the two enjoy their journey and themselves being together... until they witness a young woman dying after a car accident - a bad omen.",
    runtime: 125,
    rating: 7.2
  },
  {
    genre: ["Drama"],
    name: "Fight Club",
    plot:
      "A nameless first person narrator (Edward Norton) attends support groups in attempt to subdue his emotional state and relieve his insomniac state. When he meets Marla (Helena Bonham Carter), another fake attendee of support groups, his life seems to become a little more bearable. However when he associates himself with Tyler (Brad Pitt) he is dragged into an underground fight club and soap making scheme. Together the two men spiral out of control and engage in competitive rivalry for love and power. When the narrator is exposed to the hidden agenda of Tyler's fight club, he must accept the awful truth that Tyler may not be who he says he is.",
    runtime: 139,
    rating: 8.8
  },
  {
    genre: ["Comedy"],
    name: "Fist Fight",
    plot:
      "On the last day of school, right on Senior Prank Day in Roosevelt High, things don't look good for meek English teacher Andy Campbell, who feels exceptionally expendable facing a bleak future in front of severe job cuts, just before the year's new school season. But soon, things will go from bad to worse when feeble Campbell will infuriate the scary hot-headed history teacher Ron Strickland, who in turn, he will challenge him in an old-school, no-holds-barred, mano-a-mano throwdown in front of everybody, in the parking lot after school. Inevitably, now that the fight is on, no excuses, no regrets, and certainly no talking sense into Strickland, is going to save Campbell who needs to face the consequences of his actions and pay the heavy price. After all, snitches get stitches.",
    runtime: 91,
    rating: 5.6
  },
  {
    genre: ["Documentary", "History", "War"],
    name: "Why We Fight",
    plot:
      "He may have been the ultimate icon of 1950s conformity and postwar complacency, but Dwight D. Eisenhower was an iconoclast, visionary, and the Cassandra of the New World Order. Upon departing his presidency, Eisenhower issued a stern, cogent warning about the burgeoning 'military industrial complex,' foretelling with ominous clarity the state of the world in 2004 with its incestuous entanglement of political, corporate, and Defense Department interests.",
    runtime: 98,
    rating: 8.1
  },
  {
    genre: ["Documentary"],
    name: "Winter on Fire: Ukraine's Fight for Freedom",
    plot:
      "A documentary on the unrest in Ukraine during 2013 and 2014, as student demonstrations supporting European integration grew into a violent revolution calling for the resignation of President Viktor F. Yanukovich.",
    runtime: 102,
    rating: 8.4
  },
  {
    genre: ["Action", "Biography", "Drama"],
    name: "Ip Man: The Final Fight",
    plot:
      "In postwar Hong Kong, legendary Wing Chun grandmaster Ip Man is reluctantly called into action once more, when what begin as simple challenges from rival kung fu styles soon draw him into the dark and dangerous underworld of the Triads. Now, to defend life and honor, he has no choice but to fight one last time ...",
    runtime: 100,
    rating: 6.2
  },
  {
    genre: ["Comedy", "Sport"],
    name: "Bring It On: Fight to the Finish",
    plot:
      "Lina Cruz is a tough, sharp-witted Latina cheerleader from East L.A. who transfers to a posh, West Los Angeles high school after her widowed mother remarries a wealthy man and Lina not only finds herself a fish-out-of-her-environment at her new high school but she faces off against Avery, the snobbish and ultra-competitive all-star cheer-leading captain to qualify for a spot on her new school's cheer-leading team with the help of her new sheltered stepsister, Skylar, and her former teammates whom she calls up to help her.",
    runtime: 102,
    rating: 5.4
  },
  {
    genre: ["Animation", "Adventure", "Comedy"],
    name: "Asterix and the Big Fight",
    plot:
      "When the druid Panoramix is attacked by some roman soldiers, Obelix drives them away by throwing a menhir on them - which accidentally hits Panoramix. After this the druid has lost his memory and can not remember the formula of his magic potions, especially the one which gives superhuman strength.",
    runtime: 81,
    rating: 6.4
  },
  {
    genre: ["Short", "Comedy", "Music"],
    name: "Fight for Your Right Revisited",
    plot:
      "Following the conclusion of the storyline in the 'Fight For Your Right' music video, the Beasties break into a liquor store, drop acid with groupies, and get into a breakdance competition with time-traveling future versions of themselves.",
    runtime: 30,
    rating: 8.1
  },
  {
    genre: ["Comedy", "Romance"],
    name: "Love at First Fight",
    plot:
      "Between his friends and the family business, Arnaud's summer looks set to be a peaceful one. Peaceful until he runs into Madeleine, as beautiful as she is brusque, a concrete block of tensed muscles and doomsday prophecies. He expects nothing; she prepares for the worst. He takes things as they come, likes a good laugh. She fights, runs, swims, pushes herself to the limit. Given she hasn't asked him for anything, just how far will he go along with her? It's a love story. Or a story of survival. Or both.",
    runtime: 98,
    rating: 6.6
  },
  {
    genre: ["Documentary", "Short", "Sport"],
    name: "Day of the Fight",
    plot:
      "Based on Kubrick's pictorial for Look Magazine (January 18, 1949) entitled 'Prizefighter,' 'Day Of The Fight' tells of a day in the life of a middleweight Irish boxer named Walter Cartier, particularly the day of his bout with black middleweight Bobby James. This 16-minute short opens with a short (about 4 minutes) study of boxing's history, narrated by veteran newscaster Douglas Edwards in a no-nonsense, noir tone of voice. After this, we follow Walter (and his twin brother Vincent) through his day as he prepares for his 10:00 P.M. bout. After eating breakfast, going to early mass and eating lunch, he starts arranging his things for the fight at 4:00 P.M. By 8:00, he is waiting in his dressing room, where he undergoes a mental transformation, turning into the fighting machine the crowd clamors for. At 10:00, he faces James, and soon, he comes out victorious in a short match which was filmed live on April 17th, 1950.",
    runtime: 16,
    rating: 6.4
  },
  {
    genre: ["Action", "Sci-Fi", "Thriller"],
    name: "In Time",
    plot:
      "Welcome to a world where time has become the ultimate currency. You stop aging at 25, but there's a catch: you're genetically-engineered to live only one more year, unless you can buy your way out of it. The rich 'earn' decades at a time (remaining at age 25), becoming essentially immortal, while the rest beg, borrow or steal enough hours to make it through the day. When a man from the wrong side of the tracks is falsely accused of murder, he is forced to go on the run with a beautiful hostage. Living minute to minute, the duo's love becomes a powerful tool in their war against the system.",
    runtime: 109,
    rating: 6.7
  },
  {
    genre: ["Crime", "Drama"],
    name: "Once Upon a Time in America",
    plot:
      "Epic tale of a group of Jewish gangsters in New York, from childhood, through their glory years during prohibition, and their meeting again 35 years later.",
    runtime: 229,
    rating: 8.4
  },
  {
    genre: ["Western"],
    name: "Once Upon a Time in the West",
    plot:
      "Story of a young woman, Mrs. McBain, who moves from New Orleans to frontier Utah, on the very edge of the American West. She arrives to find her new husband and family slaughtered, but by whom? The prime suspect, coffee-lover Cheyenne, befriends her and offers to go after the real killer, assassin gang leader Frank, in her honor. He is accompanied by Harmonica, a man already on a quest to get even.",
    runtime: 164,
    rating: 8.5
  },
  {
    genre: ["Action", "Adventure", "Fantasy"],
    name: "Prince of Persia: The Sands of Time",
    plot:
      "Set in the mystical lands of Persia, a rogue prince and a mysterious princess race against dark forces to safeguard an ancient dagger capable of releasing the Sands of Time -- a gift from the gods that can reverse time and allow its possessor to rule the world.",
    runtime: 116,
    rating: 6.6
  },
  {
    genre: ["Comedy", "Drama", "Fantasy"],
    name: "About Time",
    plot:
      "At the age of 21, Tim Lake (Domhnall Gleeson) discovers he can travel in time... The night after another unsatisfactory New Year party, Tim's father (Bill Nighy) tells his son that the men in his family have always had the ability to travel through time. Tim can't change history, but he can change what happens and has happened in his own life-so he decides to make his world a better place...by getting a girlfriend. Sadly, that turns out not to be as easy as you might think. Moving from the Cornwall coast to London to train as a lawyer, Tim finally meets the beautiful but insecure Mary (Rachel McAdams). They fall in love, then an unfortunate time-travel incident means he's never met her at all. So they meet for the first time again-and again-but finally, after a lot of cunning time-traveling, he wins her heart. Tim then uses his power to create the perfect romantic proposal, to save his wedding from the worst best-man speeches, to save his best friend from professional disaster and to get his pregnant wife to the hospital in time for the birth of their daughter, despite a nasty traffic jam outside Abbey Road. But as his unusual life progresses, Tim finds out that his unique gift can't save him from the sorrows and ups and downs that affect all families, everywhere. There are great limits to what time travel can achieve, and it can be dangerous too.",
    runtime: 123,
    rating: 7.8
  },
  {
    genre: ["Comedy", "Sci-Fi"],
    name: "Hot Tub Time Machine",
    plot:
      "Three friends on losing streaks: Adam, whose girlfriend dumped him, Nick, with a dead-end job and a cheating wife, and Lou, a suicidal alcoholic. To help Lou recover from car-exhaust poisoning, Adam and Nick, with Adam's nephew Jacob, go to a winter resort that was their old party place. It's now a dump, but the lads rally for a night of drinking in the hot tub. Somehow, the hot tub takes them back to 1986, on a fateful night for each of them. Maybe if they do everything the same way they did that night, they'll get back to the future so Jacob can be born. There are serious temptations to do things differently. Will they make it back to their sorry lives? And what about Jacob?",
    runtime: 101,
    rating: 6.4
  },
  {
    genre: ["Action", "Thriller"],
    name: "Once Upon a Time in Mexico",
    plot:
      "In the third movie of Rodriguez's 'Mariachi' trilogy, a Mexican drug lord pretends to overthrow the Mexican government, and is connected to a corrupt CIA agent who at that time, demands retribution from his worst enemy to carry out the drug lord's uprising against the government.",
    runtime: 102,
    rating: 6.4
  },
  {
    genre: ["Drama", "Fantasy", "Romance"],
    name: "The Time Traveler's Wife",
    plot:
      "When Henry DeTamble meets Clare Abshire in a Chicago library they both understand that he is a time traveler, but she knows much more about him as he has not yet been to the times and places where they have already met. He falls in love with her, as she has already with him, but his continuing unavoidable absences while time traveling - and then returning with increasing knowledge of their future - makes things ever more difficult for Clare.",
    runtime: 107,
    rating: 7.1
  },
  {
    genre: ["Crime", "Drama", "Thriller"],
    name: "A Time to Kill",
    plot:
      "In Canton, Mississippi, 10-year-old Tonya Hailey is viciously brutalized by two white racist rednecks -- James Louis 'Pete' Willard and Billy Ray Cobb. Almost immediately after Tonya is found and rushed to a hospital, Pete and Billy Ray are found at a roadside bar, where they had been bragging about what they did to Tonya. Tonya's understandably distraught and enraged father, Carl Lee Hailey, remembers a case from a year ago, when four white men raped an African-American girl in a nearby town, and got acquitted. Carl is determined to not let that happen in this case. While deputy Dwayne Powell Looney is escorting Pete and Billy Ray up a flight of stairs to a court room, Carl emerges from the building's basement with an assault rifle, and he kills Pete and Billy Ray for what they did to Tonya. Carl is later arrested at his house by African-American sheriff Ozzie Walls, and Carl is scheduled to be placed on trial. Despite the efforts of the NAACP and local African-American leaders to persuade Carl to choose some of their high-powered attorneys, Carl wants to be represented by his friend Jake Tyler Brigance, who has a wife named Carla and a daughter named Hannah. Presiding over the trial is white judge Omar Noose, and the prosecution attorney is Rufus Buckley, who would like nothing more than to win the case and swim in the publicity that a win would generate, because Rufus realizes that a murder conviction could help him gain higher office. Helping Jake on the case are his former law professor Lucien Wilbanks, fellow attorney Harry Rex Vonner, and law student Ellen Roark. Ellen has had experience with death penalty cases, and that's exactly what Rufus may be seeking. To start things off, Noose denies bail and denies Jake's petition for a change of venue. Carl has also been fired from his job. Billy Ray Cobb's brother Freddie Lee Cobb wants revenge on Carl, so Freddy gets the help of the Mississippi branch of the KKK, led by Mississippi grand dragon Stump Sisson. Carl's wife Gwen tells Carl that a doctor has said that because of Pete and Billy Ray, Tonya's reproductive organs are damaged enough to where she won't be able to have kids when she grows up. That night, a KKK member is found trying to plant a bomb under Jake's porch. Jake's secretary Ethel Twitty and her husband Bud are also attacked by the KKK. Still, Jake, Harry, Lucien, and Ellen continue to help Carl. On the day the trial begins, there is a riot outside the court building between the KKK and the area's African-American residents, and Stump Sisson is killed by a molotov cocktail that was dropped from a roof by one of Carl's sons, who was not seen dropping it. Freddy and the KKK start burning crosses throughout Canton, and one of the crosses burns Jake's house down while Jake and his family are not home. As a result, the National Guard is called to Canton to keep the peace during the trial. But Freddy is not about to let that stop him. While Freddy continues his efforts to get revenge on Carl for Billy Ray's death, Carl's attorneys put everything they've got into Carl's defense.",
    runtime: 149,
    rating: 7.4
  },
  {
    genre: ["Action", "Adventure", "Sci-Fi"],
    name: "The Time Machine",
    plot:
      "Based on the classic sci-fi novel by H.G. Wells, scientist and inventor, Alexander Hartdegen, is determined to prove that time travel is possible. His determination is turned to desperation by a personal tragedy that now drives him to want to change the past. Testing his theories with a time machine of his own invention, Hartdegen is hurtled 800,000 years into the future, where he discovers that mankind has divided into the hunter - and the hunted.",
    runtime: 96,
    rating: 5.9
  },
  {
    genre: ["Adventure", "Drama", "Thriller"],
    name: "Blood Diamond",
    plot:
      "A story following Archer, a man tortured by his roots. With a strong survival instinct, he has made himself a key player in the business of conflict diamonds. Political unrest is rampant in Sierra Leone as people fight tooth for tooth. Upon meeting Solomon, and the beautiful Maddy, Archer's life changes forever as he is given a chance to make peace with the war around him.",
    runtime: 143,
    rating: 8
  },
  {
    genre: ["Drama"],
    name: "There Will Be Blood",
    plot:
      "The intersecting life stories of Daniel Plainview and Eli Sunday in early twentieth century California presents miner-turned-oilman Daniel Plainview, a driven man who will do whatever it takes to achieve his goals. He works hard but also takes advantage of those around him at their expense if need be. His business partner/son (H.W.) is, in reality, an 'acquired' child whose true biological single-parent father (working on one of Daniel's rigs) died in a workplace accident. Daniel is deeply protective of H.W. if only for what H.W. brings to the partnership. Eli Sunday is one in a pair of twins whose family farm Daniel purchases for the major oil deposit located on it. Eli, a local preacher and a self-proclaimed faith healer, wants the money from the sale of the property to finance his own church. The lives of the two competitive men often clash as Daniel pumps oil off the property and tries to acquire all the surrounding land at bargain prices to be able to build a pipeline to the coast, and as Eli tries to build his own religious empire.",
    runtime: 158,
    rating: 8.1
  },
  {
    genre: ["Adventure", "Family", "Fantasy"],
    name: "Harry Potter and the Half-Blood Prince",
    plot:
      "In the sixth year at Hogwarts School of Witchcraft, and in both wizard and muggle worlds Lord Voldemort and his henchmen are increasingly active. With vacancies to fill at Hogwarts, Professor Dumbledore persuades Horace Slughorn, back from retirement to become the potions teacher, while Professor Snape receives long awaited news. Harry Potter, together with Dumbledore, must face treacherous tasks to defeat his evil nemesis.",
    runtime: 153,
    rating: 7.6
  },
  {
    genre: ["Action", "Adventure", "Drama"],
    name: "First Blood",
    plot:
      "John J. Rambo is a former United States Special Forces soldier who fought in Vietnam and won the Congressional Medal of Honor, but his time in Vietnam still haunts him. As he came to Hope, Washington to visit a friend, he was guided out of town by the Sheriff William Teasel who insults Rambo, but what Teasel does not know that his insult angered Rambo to the point where Rambo became violent and was arrested. As he was at the county jail being cleaned, he escapes and goes on a rampage through the forest to try to escape from the sheriffs who want to kill him. Then, as Rambo's commanding officer, Colonel Samuel Trautman tries to save both the Sheriff's department and Rambo before the situation gets out of hand.",
    runtime: 93,
    rating: 7.7
  },
  {
    genre: ["Action", "Adventure", "Thriller"],
    name: "Rambo: First Blood Part II",
    plot:
      "John Rambo is removed from prison by his former superior, Colonel Samuel Troutman, for a top-secret operation to bring back POW's still held in Vietnam. Rambo's assignment is to only take pictures of where the POWs are being held, but Rambo wants to get the POWs out of Vietnam. Teamed up with female Vietnamese freedom fighter Co Bao, Rambo embarks on a mission to rescue the POWs, who are being held by sadistic Vietnamese Captain Vinh and his Russian comrade, Lieutenant Colonel Padovsky. Rambo starts killing every enemy in sight while still focusing on his intentions to rescue the POWs. There are also corrupt American officials involved in the mission, including Marshall Murdock, one of Rambo's superiors.",
    runtime: 96,
    rating: 6.4
  },
  {
    genre: ["Crime", "Drama", "Thriller"],
    name: "Blood Simple.",
    plot:
      "Texas bar owner Julian Marty, who is generally regarded as not a nice person, hires shady private detective Loren Visser, who is able to obtain what Marty requests: evidence - in this instance, photographic - that his wife, Abby, and one of his bartenders, Ray, are having an affair. As Ray and Abby realize that Marty has found out about them, it allows them to plan for their future away from Marty, while be up front with Marty about the situation. Marty, in turn, decides to hire Visser once again, this time to kill Abby and Ray, and dispose of their bodies so that they won't be found. The out in the open affair and the contract hit lead to some actions based on self interest, and a standoff of sorts between the four players, which is compounded in complexity by some wrong assumptions of what has happened, with an innocent bystander, another of the Marty's bartenders, Meurice, potentially and unwittingly adding to the scenario.",
    runtime: 99,
    rating: 7.7
  },
  {
    genre: ["Action", "Adventure", "Fantasy"],
    name: "Underworld: Blood Wars",
    plot:
      "The next installment in the blockbuster franchise, UNDERWORLD: BLOOD WARS follows Vampire death dealer, Selene (Kate Beckinsale) as she fends off brutal attacks from both the Lycan clan and the Vampire faction that betrayed her. With her only allies, David (Theo James) and his father Thomas (Charles Dance), she must stop the eternal war between Lycans and Vampires, even if it means she has to make the ultimate sacrifice.",
    runtime: 91,
    rating: 5.8
  },
  {
    genre: ["Action", "Crime", "Drama"],
    name: "Blood Father",
    plot:
      "An ex-con reunites with his estranged wayward 17-year old daughter to protect her from drug dealers who are trying to kill her.",
    runtime: 88,
    rating: 6.4
  },
  {
    genre: ["Action", "Crime", "Drama"],
    name: "Blood Work",
    plot:
      "Retired FBI profiler Terry McCaleb (Eastwood), who has recently had a heart transplant, is hired by Graciela Rivers (De Jesus), to investigate the death of her sister, Gloria, who happens to have given McCaleb his heart. On the case, he soon deduces that the killer, who staged the murder to look like a random robbery, may actually be a serial killer Terry was trailing for years in the FBI. Can the elderly and feeble McCaleb, who had intended to spend his retirement living on his boat in the Los Angeles harbor, and who can't drive, and has to nap regularly, muster up the endurance to find the killer?",
    runtime: 110,
    rating: 6.4
  },
  {
    genre: ["Drama"],
    name: "Throne of Blood",
    plot:
      "After securing a major victory on the battlefield, Taketoti Washizu and one of his commanders, Yoshiaki Miki, find themselves lost in the maze-like Spider's Web forest. They come across a spirit-like seer who tells them of their future: both have been promoted because of their victory that day; Washizu will someday be the Great Lord of the Spider's Web castle while Miki's son will someday rule as Great Lord as well. When they arrive at the castle, they learn that the first part of the prophecy is correct. Washizu has no desire to become Great Lord but his ambitious wife urges him to reconsider. When the current Great Lord makes a surprise visit to his garrison outpost, Washizu is again promoted to commander of his vanguard but his wife reminds him of the danger that comes with the position. As pressure mounts, Wahizu takes action leading to its inevitable conclusion.",
    runtime: 110,
    rating: 8.1
  }
]);

// drop the existing
// insert then
db.stars.drop();
db.stars.insert([
  {
    profession: ["Actor", "Producer"],
    name: "Chris Hemsworth",
    bio:
      "Chris Hemsworth (born 11 August 1983) is an Australian actor. He is best known for his roles as Kim Hyde in the Australian TV series Home and Away (2004) and as Thor in the Marvel Cinematic Universe films Thor (2011), The Avengers (2012), Thor: The Dark World (2013) and Avengers: Age of Ultron (2015). He has also appeared in the science fiction action film Star Trek(2009), the thriller adventure A Perfect Getaway (2009), the horror comedy The Cabin in the Woods (2012), the dark fantasy action film Snow White and the Huntsman (2012), the war film Red Dawn (2012) and the biographical sports drama film Rush (2013).\n\nDescription above from the Wikipedia article Chris Hemsworth, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/lrhth7yK9p3vy6p7AabDUM1THKl.jpg",
    born: "1983-08-11",
    gender: "Male"
  },
  {
    profession: ["Actor"],
    name: "Jennifer Lawrence",
    bio:
      "Jennifer Shrader Lawrence (born August 15, 1990) is an American actress.  \n\nHer first major role was as a lead cast member on TBS's The Bill Engvall Show (2007–2009) and she subsequently appeared in the independent films The Burning Plain (2008) and Winter's Bone (2010), for which she received nominations for the Academy Award, Golden Globe Award, Satellite Award, Independent Spirit Award, and Screen Actors Guild Award for Best Actress. At age 20, she was the second-youngest actress ever to be nominated for the Academy Award for Best Actress. At age 22, her performance in the romantic comedy Silver Linings Playbook (2012) earned her the Academy Award, Golden Globe Award, Screen Actors Guild Award, Satellite Award and the Independent Spirit Award for Best Actress, amongst other accolades, making her the youngest person ever to be nominated for two Academy Awards for Best Actress and the second-youngest Best Actress winner.\n\nLawrence is also known for playing Raven Darkhölme / Mystique in the 2011 film X-Men: First Class, a role she will reprise in X-Men: Days of Future Past in 2014. In 2012, she achieved international recognition starring as the heroine Katniss Everdeen in The Hunger Games, an adaptation of Suzanne Collins' best-selling novel of the same name. Her performance in the film garnered her notable critical praise and marked her as the highest-grossing action heroine of all time.\n\nLawrence's performances thus far have prompted Rolling Stone to call her 'the most talented young actress in America.' In 2013, Time named her one of the 100 most influential people in the world.\n\nDescription above from the Wikipedia article Jennifer Lawrence, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/hLzgl1dS8O2IAn1PIwHYhxR0Lkm.jpg",
    born: "1990-08-15",
    gender: "Female"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Henry Cavill",
    bio:
      "Henry William Dalgliesh Cavill (born 5 May 1983) is a British actor. He has appeared in the films The Count of Monte Cristo and Stardust, and played the role of Charles Brandon, 1st Duke of Suffolk, on the Showtime series The Tudors, from 2007 until 2010. He has been cast as Superman in the 2012 film Man of Steel.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/hErUwonrQgY5Y7RfxOfv8Fq11MB.jpg",
    born: "1983-05-05",
    gender: "Male"
  },
  {
    profession: ["Actor"],
    name: "Rose Byrne",
    bio:
      "Mary Rose Byrne (born 24 July 1979) is an Australian actress. Byrne made her screen debut in 1994 with a small role in the film Dallas Doll. In 2000, she played a leading role in the Australian film The Goddess of 1967, which brought her a Venice Film Festival award for Best Actress. Since 2007, she has played Ellen Parsons in the cable television series Damages, which has earned her two Golden Globe and two Emmy nominations. In 2011, she starred in the critically acclaimed and financially successful films Insidious, X-Men: First Class and Bridesmaids.\n\nDescription above from the Wikipedia article Rose Byrne, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/laJdQNmsuR2iblYUggEqr49LvwJ.jpg",
    born: "1979-07-24",
    gender: "Female"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Samuel L. Jackson",
    bio:
      "Samuel Leroy Jackson (born December 21, 1948) is an American film and television actor and film producer. After Jackson became involved with the Civil Rights Movement, he moved on to acting in theater at Morehouse College, and then films. He had several small roles such as in the film Goodfellas, Def by Temptation, before meeting his mentor, Morgan Freeman, and the director Spike Lee. After gaining critical acclaim for his role in Jungle Fever in 1991, he appeared in films such as Patriot Games, Amos & Andrew, True Romance and Jurassic Park. In 1994 he was cast as Jules Winnfield in Pulp Fiction, and his performance received several award nominations and critical acclaim.\n\nJackson has since appeared in over 100 films including Die Hard with a Vengeance, The 51st State, Jackie Brown, Unbreakable, The Incredibles, Black Snake Moan, Shaft, Snakes on a Plane, as well as the Star Wars prequel trilogy and small roles in Quentin Tarantino's Kill Bill Vol. 2 and Inglourious Basterds. He played Nick Fury in Iron Man and Iron Man 2, Thor, the first two of a nine-film commitment as the character for the Marvel Cinematic Universe franchise. Jackson's many roles have made him one of the highest grossing actors at the box office. Jackson has won multiple awards throughout his career and has been portrayed in various forms of media including films, television series, and songs. In 1980, Jackson married LaTanya Richardson, with whom he has one daughter, Zoe.\n\nDescription above from the Wikipedia article Samuel L. Jackson, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/jyFUkDAP0XXHQDsDhufZWZG25y.jpg",
    born: "1948-12-21",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Bill Skarsgård",
    bio:
      "Bill Istvan Günther Skarsgård (born 9 August 1990) is a Swedish actor. He is best known for starring in The Divergent Series: Allegiant, Atomic Blonde, and the Netflix original series Hemlock Grove and playing Pennywise the Dancing Clown in the 2017 adaptation of It.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/xt2h7nOUe8q6hUjzgQ8LdVmFy8H.jpg",
    born: "1990-08-09",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Travis Fimmel",
    bio:
      "Travis Fimmel (born 15 July 1979) is an Australian actor and former Calvin Klein model who is currently based in the United States.\n\nDescription above from the Wikipedia article Travis Fimmel, licensed under CC-BY-SA, full list of contributors on Wikipedia",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/v8gLLGqFOHMtftmhg6148zKvBPU.jpg",
    born: "1979-07-15",
    gender: "Male"
  },
  {
    profession: ["Actor"],
    name: "Katheryn Winnick",
    bio:
      "As her impressively diverse list of credits attests, the beautiful Canadian-born Katheryn Winnick has always been drawn to the unconventional, showing range and depth with every role she plays.\n\nWinnick will next star as the fearless shield maiden, 'Lagertha', wife and warrior of a great Viking leader in the new eagerly-anticipated television series 'Vikings'. Produced by MGM and The History Channel, 'Vikings' is an epic historical drama that chronicles legendary events of the medieval times, also starring Golden Globe Winner, Gabriel Byrne and Travis Fimmel. Winnick considers 'Vikings' to be her most precious acting memories to date. This year alone, Winnick exemplifies her talent and diversity in roles when she appears as Charlie Sheen's ex in 'A Glimpse Inside the Mind of Charles Swan III' (co starring Bill Murray, Patricia Arquette, and Jason Schwartzman); and alongside Al Pacino, Christopher Walken, and Alan Arkin in Lakeshore Entertainment's 'Stand Up Guys'.\n\nRecent career highlights include a sexy turn opposite Jake Gyllenhaal and Anne Hathaway in Ed Zwick's 'Love and Other Drugs'; a fun, physically demanding role as one of the eponymous assassins in the Ashton Kutcher, Katherine Heigl action-comedy, 'Killers' (in which Winnick did all her own stunts); a juicy recurring role as David Boreanaz's love interest on Fox's hit primetime TV series, 'Bones'; and a subtly endearing performance in Sophie Barthes' 'Cold Souls' (2009) alongside Academy Award-nominated co-stars Paul Giamatti, Emily Watson, and David Straitharn that resulted in a nod for 'Best Ensemble Cast' at that year's Independent Spirit Awards.\n\nWinnick demonstrates talent beyond the acting realm as an accomplished martial artist. After receiving her first Black Belt at the ripe old age of thirteen, she went on to compete in the Canadian Nationals, opened a handful of highly-successful Tae Kwon Do schools in and around Toronto, and - as if all that was not enough - eventually trained to become a licensed bodyguard. She currently holds a third-degree Black Belt in Tae Kwon Do and a second-degree Black Belt in Karate.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/k5bAyHknFqwRoFGc1Pmh7JAffWj.jpg",
    born: "1977-12-17",
    gender: "Female"
  },
  {
    profession: ["Actor"],
    name: "Kaya Scodelario",
    bio:
      "Kaya Rose Scodelario-Davis (née Humphrey; born 13 March 1992) is an English actress. She is best known for her roles as Effy Stonem on the E4 teen drama Skins (2007-2010; 2012), Catherine Earnshaw in Andrea Arnold's Wuthering Heights (2011), Teresa Agnes in The Maze Runner film series and Carina Smyth in Pirates of the Caribbean: Dead Men Tell No Tales (2017).",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/iTrPnn7oS96k0iWPzNxaKCNutB6.jpg",
    born: "1992-02-13",
    gender: "Female"
  },
  {
    profession: ["Actor"],
    name: "Beyoncé Knowles",
    bio:
      "Beyoncé Giselle Knowles, born on September 4, 1981, often known simply as Beyoncé, is an American R&B and pop recording artist, actress and fashion model.\n\nBorn and raised in Houston, Texas, she enrolled in various performing arts schools and was first exposed to singing and dancing competitions as a child. Knowles rose to fame in the late 1990s as the lead singer of the R&B girl group Destiny's Child, one of the world's best-selling girl groups of all time. During the hiatus of Destiny's Child, Knowles released her debut solo album Dangerously in Love (2003), which spawned the number one hits 'Crazy in Love' and 'Baby Boy' and became one of the most successful albums of that year, earning her a then record-tying five Grammy Awards.\n\nFollowing the group's disbandment in 2005, Knowles released B'Day in 2006. It debuted at number one on the Billboard charts and included the hits 'Déjà Vu', 'Irreplaceable' and 'Beautiful Liar'. Her third solo album I Am... Sasha Fierce, released in November 2008, included the anthemic 'Single Ladies (Put a Ring on It)'. The album and its singles earned her six Grammy Awards, breaking the record for most Grammy Awards won by a female artist in one night. Knowles is one of the most honored artists by the Grammys with 16 awards—13 as a solo artist and three as a member of Destiny's Child.\n\nKnowles began her acting career in 2001, appearing in the musical film Carmen: A Hip Hopera. In 2006, she starred in the lead role in the film adaptation of the 1981 Broadway musical Dreamgirls, for which she earned two Golden Globe nominations. Knowles launched her family's fashion line, House of Deréon, in 2004, and has endorsed such brands as Pepsi, Tommy Hilfiger, Armani and L'Oréal.\n\nIn 2010, Forbes ranked Knowles at number two on its list of the 100 Most Powerful and Influential Celebrities in the world; she was also listed as the most powerful and influential musician in the world. Time also included Knowles on its list of the '100 Most Influential People in the World'. Knowles has attained five Hot 100 number one singles as a solo performer and four with Destiny's Child, and as a solo artist, has sold over 35 million albums and singles in the U.S.; according to Sony, her total record sales, when combined with the group, have surpassed 100 million. On December 11, 2009, Billboard listed Knowles as the most successful female artist of the 2000s decade and the top Radio Artist of the decade. In February 2010, the RIAA listed her as the top certified artist of the decade.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/cOFQlPKAmo2DlnZwMCYo3b7sI2K.jpg",
    born: "1981-09-04",
    gender: "Female"
  },
  {
    profession: ["Actor"],
    name: "Olga Kurylenko",
    bio:
      "Olga Kurylenko, a Ukrainian-born actress and model who grew up in poverty sharing a Soviet flat with her aunt, uncle, grandparents and cousin, is now starring as Bond girl opposite Daniel Craig.  She was born Olga Konstantinovna Kurylenko on November 14, 1979, in Berdyansk, Ukraine, Soviet Union. Her mother, Marina Alyabysheva, divorced her father, Konstantin Kurylenko, soon after her birth. After the divorce, her mother struggled to survive as an art teacher. Young Olga Kurylenko was brought up by her mother and her grandmother, Raisa. During her youth, Olga had a humbling experience of living in poverty; she had no choice but to wear rags and had to darn the holes on her sweater. During the years in Ukraine she studied art, languages, did 7 years of musical school studying piano and went to a ballet studio until 13.\n\nAt age 13, Olga and her mother made a trip to Moscow. There she was scouted by an agent who approached her at a subway station and offered a job as a model. Initially, Olga's mother was suspicious, but eventually Olga made a good career choice and took training as a model in Moscow. By age 16, she was ready for the next step. She moved to Paris, learned French in six months, and was signed by the Madison agency. At age 18, Olga appeared on the cover of Glamour, then she graced magazine covers of Elle, Madame Figaro, Marie Claire, and Vogue, and also became the face of Lejaby lingerie, Bebe clothing, Clarins and Helena Rubinstein cosmetic companies.\n\nIn 1999, Olga married her friend, French photographer Cedric Van Mol and divorced him three and a half years later. One day Olga presented herself to an acting agency. Eventually, she swapped the catwalk for celluloid, and her acting career took off. In 2005 she made her film debut as Iris, a sensual beauty in L'annulaire (2005) by director Diane Bertrand.\n\nOlga's cinematic roles have been notably steamy, and her natural beauty and explicit nudity attracted the attention of the male audiences. She appeared opposite Elijah Wood in Paris, je t'aime (2006) and as Sofia in Le serpent (2006), then co-starred as Russian beauty Nika Boronina opposite Timothy Olyphant in Hitman (2007/I). She also appears as Mina Harud in the indy surveillance-thriller 'Tyranny' (2008) and is billed as Camille, the Bond girl in Quantum of Solace (2008), a sequel to Casino Royale (2006).",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/v9HmONHtTZM4Sl9QSNpxDYvuMCk.jpg",
    born: "1979-11-14",
    gender: "Female"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Keanu Reeves",
    bio:
      "Keanu Charles Reeves is a Canadian actor. Reeves is known for his roles in Bill &amp; Ted's Excellent Adventure, Speed, Point Break, and The Matrix trilogy as Neo. He has collaborated with major directors such as Stephen Frears (in the 1988 period drama Dangerous Liaisons); Gus Van Sant (in the 1991 independent film My Own Private Idaho); and Bernardo Bertolucci (in the 1993 film Little Buddha). Referring to his 1991 film releases, The New York Times' critic, Janet Maslin, praised Reeves' versatility, saying that he 'displays considerable discipline and range. He moves easily between the buttoned-down demeanor that suits a police procedural story and the loose-jointed manner of his comic roles.' A repeated theme in roles he has portrayed is that of saving the world, including the characters of Ted Logan, Buddha, Neo, Johnny Mnemonic, John Constantine and Klaatu.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/bOlYWhVuOiU6azC4Bw6zlXZ5QTC.jpg",
    born: "1964-09-02",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Johnny Depp",
    bio:
      "John Christopher 'Johnny' Depp II (born June 9, 1963) is an American actor and musician. He has won the Golden Globe Award and Screen Actors Guild award for Best Actor.\n\nDepp rose to prominence on the 1980s television series 21 Jump Street, becoming a teen idol. Turning to film, he played the title character of Edward Scissorhands (1990), and later found box office success in films such as Sleepy Hollow (1999), Pirates of the Caribbean: The Curse of the Black Pearl (2003), Charlie and the Chocolate Factory (2005), and Rango (2011). He has collaborated with director and friend Tim Burton in seven films, including Sweeney Todd: The Demon Barber of Fleet Street (2007) and Alice in Wonderland (2010). Depp has gained acclaim for his portrayals of people such as Edward D. Wood, Jr., in Ed Wood, Joseph D. Pistone in Donnie Brasco, Hunter S. Thompson in Fear and Loathing in Las Vegas, George Jung in Blow, and the bank robber John Dillinger in Michael Mann's Public Enemies.\n\nFilms featuring Depp have grossed over $2.6 billion at the United States box office and over $6 billion worldwide. He has been nominated for top awards many times, winning the Best Actor Awards from the Golden Globes for Sweeney Todd: The Demon Barber of Fleet Street and from the Screen Actors Guild for Pirates of the Caribbean: The Curse of the Black Pearl. He also has garnered a sex symbol status in American cinema, being twice named as the Sexiest man alive by People magazine in 2003 and 2009.\n\nDescription above from the Wikipedia article Johnny Depp, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/ea4fTp9T8Zy2KWxyFsqDIBgHZmb.jpg",
    born: "1963-06-09",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Dwayne Johnson",
    bio:
      "Dwayne Douglas Johnson (born May 2, 1972), also known by his ring name The Rock, is an American and Canadian actor, producer and semi-retired professional wrestler, signed with WWE. ",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/akweMz59qsSoPUJYe7QpjAc2rQp.jpg",
    born: "1972-05-02",
    gender: "Male"
  },
  {
    profession: ["Actor"],
    name: "Charlize Theron",
    bio:
      "Charlize Theron (born 7 August 1975) is a South African actress, film producer and former fashion model.\n\nShe rose to fame in the late 1990s following roles in the films The Devil's Advocate (1997), Mighty Joe Young (1998), and The Cider House Rules (1999). Theron received critical acclaim for her portrayal of serial killer Aileen Wuornos in Monster (2003), for which she won the Silver Bear, Golden Globe Award, Screen Actors Guild Award, and Academy Award for Best Actress among several other accolades, becoming the first South African to win an Academy Award in a major acting category. In recent years, she has moved into the field of producing, both in television and film.\n\nShe received further Academy Award and Golden Globe Award nominations for her performance in North Country in 2005, and a Golden Globe Award nomination for her performance in Young Adult in 2011. In 2012, she appeared in Snow White &amp; the Huntsman and Prometheus, both of which were box office successes. Theron became a U.S. citizen in 2007, while retaining her South African citizenship.\n\nTheron was born in Benoni, in the then-Transvaal Province of South Africa, the only child of Gerda (née Maritz) and Charles Theron (born 27 November 1947). Second Boer War figure Danie Theron was her great-great-uncle. Her ancestry includes French, German, and Dutch; her French forebears were early Huguenot settlers in South Africa. 'Theron' is an Occitan surname (originally spelled Théron) pronounced in Afrikaans as [tɜːron], although she has said that the way she pronounces it in South Africa is [θron]. She changed the pronunciation when she moved to the U.S. to give it a more 'American' sound.\n\nShe grew up on her parents' farm in Benoni, near Johannesburg. On 21 June 1991, Theron's father, an alcoholic, physically attacked her mother and threatened both her mother and her while drunk; Theron's mother then shot and killed him. The shooting was legally adjudged to have been self-defense and her mother faced no charges.\n\nTheron attended Putfontein Primary School (Laerskool Putfontein), a period she later characterised as not 'fitting in'. At 13, Theron was sent to boarding school and began her studies at the National School of the Arts in Johannesburg. Although Theron is fluent in English, her first language is Afrikaans.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/k5Xt2mNlraX7yHYaPy9gvayCaKV.jpg",
    born: "1975-08-08",
    gender: "Female"
  },
  {
    profession: ["Actor"],
    name: "Scarlett Johansson",
    bio:
      "Scarlett Johansson, born November 22, 1984, is an American actress, model and singer. She made her film debut in North (1994) and was later nominated for the Independent Spirit Award for Best Female Lead for her performance in Manny & Lo (1996), garnering further acclaim and prominence with roles in The Horse Whisperer (1998) and Ghost World (2001). She shifted to adult roles with her performances in Girl with a Pearl Earring (2003) and Sofia Coppola's Lost in Translation (2003), for which she won a BAFTA award for Best Actress in a Leading Role; both films earned her Golden Globe Award nominations as well.\n\nA role in A Love Song for Bobby Long (2004) earned Johansson her third Golden Globe for Best Actress nomination. Johansson garnered another Golden Globe nomination for Best Supporting Actress with her role in Woody Allen's Match Point (2005). She has played the Marvel comic book character Black Widow/Natasha Romanoff in Iron Man 2 (2010), The Avengers (2012), and Captain America: The Winter Soldier (2014) and is set to reprise the role in Avengers: Age of Ultron (2015). The 2010 Broadway revival of Arthur Miller's A View From the Bridge won Johansson the Tony Award for Best Performance by a Featured Actress in a Play. As a singer, Johansson has released two albums, Anywhere I Lay My Head and Break Up.\n\nJohansson is considered one of Hollywood's modern sex symbols, and has frequently appeared in published lists of the sexiest women in the world, most notably when she was named the 'Sexiest Woman Alive' by Esquire magazine in both 2006 and 2013 (the only woman to be chosen for the title twice), and the 'Sexiest Celebrity' by Playboy magazine in 2007.\n\nJohansson was born in New York City. Her father, Karsten Johansson, is a Danish-born architect, and her paternal grandfather, Ejner Johansson, was a screenwriter and director. Her mother, Melanie Sloan, a producer, comes from an Ashkenazi Jewish family from the Bronx. Johansson has an older sister, Vanessa, who is an actress; an older brother, Adrian; a twin brother, Hunter (who appeared in the film Manny & Lo with Scarlett); and a half-brother, Christian, from her father's re-marriage.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/8EueDe6rPF0jQU4LSpsH2Rmrqac.jpg",
    born: "1984-11-22",
    gender: "Female"
  },
  {
    profession: ["Actor"],
    name: "Emilia Clarke",
    bio:
      "Emilia Isabelle Euphemia Rose Clarke (born 23 October 1986) is an English actress.\n\nClarke rose to prominence in 2011 for her breakthrough role as Daenerys Targaryen in the HBO series Game of Thrones, a performance that has gained her both critical and popular acclaim. In 2017, Clarke became one of the highest paid actors on television for earnings of £2 million per episode of Game of Thrones.\n\nClarke made her Broadway debut as Holly Golightly in a production of Breakfast at Tiffany's in March 2013. In 2015, she was named Esquire's Sexiest Woman Alive. She is also known for her starring roles as Sarah Connor in the science fiction film Terminator Genisys (2015) and as Louisa Clark in the romance film Me Before You (2016). In November 2016 she was cast as the female lead in the upcoming Star Wars Han Solo anthology film.\n\nDescription above from the Wikipedia article Emilia Clarke, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/j7d083zIMhwnKro3tQqDz2Fq1UD.jpg",
    born: "1986-10-23",
    gender: "Female"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Liam Neeson",
    bio:
      "William John 'Liam' Neeson OBE (born 7 June 1952) is an Irish actor who has been nominated for an Oscar, a BAFTA and three Golden Globe Awards.\n\nHe has starred in a number of notable roles including Oskar Schindler in Schindler's List, Michael Collins in Michael Collins, Peyton Westlake in Darkman, Jean Valjean in Les Misérables, Qui-Gon Jinn in Star Wars Episode I: The Phantom Menace, Alfred Kinsey in Kinsey, Ras Al Ghul in Batman Begins and the voice of Aslan in The Chronicles of Narnia film series. He has also starred in several other notable films, from major Hollywood studio releases (ie. Excalibur, The Dead Pool, Nell, Rob Roy, The Haunting, Love Actually, Kingdom of Heaven, Taken, Clash of the Titans, The A-Team, Unknown) to smaller arthouse films (ie. Deception, Breakfast on Pluto, Chloe).\n\nHe was born in Ballymena, County Antrim, Northern Ireland and educated at Saint Patrick's College, Ballymena Technical College and Queen's University Belfast. He moved to Dublin after university to further his acting career, joining the renowned Abbey Theatre. In the early 1990s, he moved again to the United States, where the wide acclaim for his performance in Schindler's List led to more high-profile work. He is widowed and lives in New York with his two sons.\n\nDescription above from the Wikipedia article Liam Neeson, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/9mdAohLsDu36WaXV2N3SQ388bvz.jpg",
    born: "1952-06-07",
    gender: "Male"
  },
  {
    profession: ["Actor"],
    name: "Carla Gugino",
    bio:
      "Carla was born in Sarasota, Florida. Moved with her mother to Paradise, California, when Carla was just five years old. During her childhood, they moved many times within the state. But she remained a straight-A student throughout high school and graduated as valedictorian. A major modeling agency discovered Carla in San Diego and sent her to New York to begin a new career when she was 15. New York was more than she could handle at that young age, so she returned to LA in the summer, modeling and enrolling in an acting class at the suggestion of her aunt, Carol Merrill, known from 'Let's Make a Deal' (1963). During her free time, Carla enjoys yoga, traveling and spending time with her friends in Los Angeles.\n\nDescription above from the Wikipedia article Carla Gugino, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/xddYLCp8zWLgYcQRck7REEgCUWl.jpg",
    born: "1971-08-29",
    gender: "Female"
  },
  {
    profession: ["Actor"],
    name: "Ana de Armas",
    bio:
      "Ana de Armas born in Cuba on April 30, 1988. At age of 14 she began her studies at the National Theatre School of Havana, where she graduated after 4 years. At 16 she made her first film called Una rosa de Francia (2006) directed by Manuel Gutiérrez Aragón. In 2006 she moved to Spain where she continued her film career, and started on TV. She currently lives between Madrid and Barcelona. Ana is more know for her roles on Knock Knock (2015), War Dogs (2016), Hands Of Stone (2016) and Blade Runner 2049 (2017).",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/xPYOkcMaAEdoTWp6pme056WqhFW.jpg",
    born: "1988-04-30",
    gender: "Female"
  },
  {
    profession: ["Actor"],
    name: "Cate Blanchett",
    bio:
      "Catherine Élise 'Cate' Blanchett (born 14 May 1969) is an Australian  actress and theatre director. She has won multiple acting awards, most  notably two SAGs, two Golden Globe Awards, two BAFTAs, and an Academy  Award, as well as the Volpi Cup at the 64th Venice International Film  Festival. Blanchett earned five Academy Award nominations between 1998  and 2007.  Blanchett came to international attention for her role as Elizabeth I of  England in the 1998 film Elizabeth, directed by Shekhar Kapur. She is  also well-known for her portrayals of the elf queen Galadriel in Peter  Jackson's The Lord of the Rings trilogy and the upcoming The Hobbit,  Colonel-Doctor Irina Spalko in Indiana Jones and the Kingdom of the  Crystal Skull and Katharine Hepburn in Martin Scorsese's The Aviator, a  role which brought her an Academy Award for Best Supporting Actress. She  and her husband Andrew Upton are currently artistic directors of the  Sydney Theatre Company.\n\nDescription above from the Wikipedia article Cate Blanchett, licensed  under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/5HikVWKfkkUa8aLdCMHtREBECIn.jpg",
    born: "1969-05-14",
    gender: "Female"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Jason Statham",
    bio:
      "Jason Statham (born 26. Juli 1967) is an English actor and martial artist, known for his roles in the Guy Ritchie crime films Lock, Stock and Two Smoking Barrels; Revolver; and Snatch.\n\nStatham appeared in supporting roles in several American films, such as The Italian Job, as well as playing the lead role in The Transporter, Crank, The Bank Job, War (opposite martial arts star Jet Li), and Death Race. Statham solidified his status as an action hero by appearing alongside established action film actors Sylvester Stallone, Arnold Schwarzenegger, Bruce Willis, Jet Li and Dolph Lundgren in The Expendables. He normally performs his own fight scenes and stunts.\n\nDescription above from the Wikipedia article Jason Statham, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/PhWiWgasncGWD9LdbsGcmxkV4r.jpg",
    born: "1967-07-26",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Idris Elba",
    bio:
      "Idris Elba (born 6 September 1972) is a British television, theatre, and film actor who has starred in both British and American productions. One of his first acting roles was in the soap opera Family Affairs. Since then he has worked in a variety of TV and movie projects including Ultraviolet, The Wire, No Good Deed and Zootopia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
    born: "1972-09-06",
    gender: "Male"
  },
  {
    profession: ["Actor"],
    name: "Emma Watson",
    bio:
      "Emma Watson (born 15 April 1990) is an English actress who rose to prominence playing Hermione Granger, one of three starring roles in the Harry Potter film series. Watson was cast as Hermione at the age of nine, having previously acted only in school plays. From 2001 to 2011, she starred in eight Harry Potter films alongside Daniel Radcliffe and Rupert Grint. Watson's work on the Harry Potter series has earned her several awards and more than £10 million.\n\nShe made her modelling debut for Burberry's Autumn/Winter campaign in 2009. In 2007, Watson announced her involvement in two non-Harry Potter productions: the television adaptation of the novel Ballet Shoes and an animated film, The Tale of Despereaux. Ballet Shoes was broadcast on 26 December 2007 to an audience of 5.2 million, and The Tale of Despereaux, based on the novel by Kate DiCamillo, was released in 2008 and grossed over US $70 million in worldwide sales. In 2012, she starred in Stephen Chbosky's film adaptation of The Perks of Being a Wallflower, and was cast in the role of Ila in Darren Aronofsky's biblical epic Noah.\n\nDescription above from the Wikipedia article Emma Watson, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/s77hUycSJ4x8RJWHDC9WPgotgxE.jpg",
    born: "1990-04-15",
    gender: "Female"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Jeremy Renner",
    bio:
      "Jeremy Lee Renner (born January 7, 1971, height 5' 10' (1,78 m)) is an American actor and musician. Renner appeared in films throughout the 2000s, mostly in supporting roles. He came to prominence in films such as Dahmer (2002), S.W.A.T. (2003), Neo Ned (2005), 28 Weeks Later (2007), The Town (2010), and was nominated for an Academy Award for Best Actor for his starring role in the 2009 Best Picture-winning war thriller The Hurt Locker.\n\nThe following year he appeared in the critically acclaimed film The Town. His work as 'James Coughlin' in that film received a nomination for the 2010 Academy Award for Best Supporting Actor plus nominations in the Supporting Actor category at the SAG Awards and the Golden Globes.\n\nDescription above from the Wikipedia article Jeremy Renner, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/l6CxIOFCjF65298teEJd5mCnPDO.jpg",
    born: "1971-01-07",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Hugh Jackman",
    bio:
      "Hugh Michael Jackman (born 12 October 1968) is an Australian actor and producer who is involved in film, musical theatre, and television. Jackman has won international recognition for his roles in major films, notably as action/superhero, period and romance characters.\n\nHe is known for his role as Wolverine in the X-Men series, as well as for his leads in Kate &amp; Leopold, Van Helsing, The Prestige, and Australia. Jackman is a singer, dancer, and actor in stage musicals, and won a Tony Award for his role in The Boy from Oz. In November 2008, Open Salon named Jackman one of the sexiest men alive. Later that same month, People magazine named Jackman 'Sexiest Man Alive.” A three-time host of the Tony Awards, winning an Emmy Award for one of these appearances, Jackman also hosted the 81st Academy Awards on 22 February 2009. Description above from the Wikipedia article Hugh Jackman , licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/2VFrKpHGSKNUfq3TI6zUSU5AIdt.jpg",
    born: "1968-10-12",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Robert Downey Jr.",
    bio:
      "Robert John Downey, Jr. (born April 4, 1965) is an American actor. Downey made his screen debut in 1970, at the age of five, when he appeared in his father's film Pound, and has worked consistently in film and television ever since. During the 1980s he had roles in a series of coming of age films associated with the Brat Pack. Less Than Zero (1987) is particularly notable, not only because it was the first time Downey's acting would be acknowledged by critics, but also because the role pushed Downey's already existing drug habit one step further. After Zero, Downey started landing roles in bigger films such as Air America (1990), Soapdish (1991) and Natural Born Killers (1994). He played Charlie Chaplin in the 1992 film Chaplin, for which he received an Academy Award nomination for Best Actor.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/1YjdSym1jTG7xjHSI0yGGWEsw5i.jpg",
    born: "1965-04-04",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Dylan O'Brien",
    bio:
      "Dylan O'Brien is an American actor and musician. He co-stars as Stiles in the MTV series Teen Wolf. He also co-starred in the film High Road, and starred in the film The First Time, with Britt Robertson.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/gmU3f4aR6Bd8zkk6AiLm0dvWPaE.jpg",
    born: "1991-08-26",
    gender: "Male"
  },
  {
    profession: ["Actor"],
    name: "Linda Fiorentino",
    bio:
      "Linda Fiorentino (born March 9, 1958) is an American actress. She is known for her roles in films such as Dogma, Vision Quest, Men in Black, After Hours and The Last Seduction.\n\nDescription above from the Wikipedia article Linda Fiorentino, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/aKadq5uC9CjCKtkMYPYECNcGz3s.jpg",
    born: "1958-03-09",
    gender: "Female"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Pierce Brosnan",
    bio:
      "Pierce Brendan Brosnan, OBE (16 May 1953) is an Irish actor, film producer and environmentalist who holds Irish and American citizenship.\n\nAfter leaving school at 16, Brosnan began training in commercial illustration, but trained at the Drama Centre in London for three years. Following a stage acting career he rose to popularity in the television series Remington Steele (1982–87). After Remington Steele, Brosnan took the lead in many films such as Dante's Peak and The Thomas Crown Affair. In 1995, he became the fifth actor to portray secret agent James Bond in the official film series, starring in four films between 1995 and 2002. He also provided his voice and likeness to Bond in the 2004 video game James Bond 007: Everything or Nothing.\n\nSince playing Bond, he has starred in such successes as The Matador (nominated for a Golden Globe, 2005), Mamma Mia! (National Movie Award, 2008), and The Ghost Writer (2010). In 1996, along with Beau St. Clair, Brosnan formed Irish DreamTime, a Los Angeles-based production company.\n\nIn later years, he has become known for his charitable work and environmental activism. He was married to Australian actress Cassandra Harris from 1980 until her death in 1991. He married American journalist and author Keely Shaye Smith in 2001, becoming an American citizen in 2004.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/1JXL0zrA26JjdoX8sqf57fJRDVM.jpg",
    born: "1953-05-16",
    gender: "Male"
  },
  {
    profession: ["Actor"],
    name: "Natalie Portman",
    bio:
      "Natalie Portman (born Neta-Lee Hershlag, Hebrew: נטע-לי הרשלג‎‎; June 9, 1981) is an actress with dual American and Israeli citizenship. Her first role was in the 1994 action thriller Léon: The Professional, opposite Jean Reno. She was later cast as Padmé Amidala in the Star Wars prequel trilogy (released in 1999, 2002 and 2005).\n\nBorn in Jerusalem to an Israeli father and American mother, Portman grew up in the eastern United States from the age of three. She studied dancing and acting in New York, and starred in Star Wars: Episode I – The Phantom Menace while still at high school on Long Island. In 1999, Portman enrolled at Harvard University to study psychology, alongside her work as an actress; she completed a bachelor's degree in 2003. During her studies she starred in a second Star Wars film and opened in New York City's The Public Theater production of Anton Chekhov's The Seagull in 2001.\n\nPortman won a Golden Globe and was nominated for an Academy Award for starring in the 2004 drama Closer, appeared in Star Wars: Episode III – Revenge of the Sith the following year, and won a Constellation Award for Best Female Performance and the Saturn Award for Best Actress for her starring role in the political thriller V for Vendetta (2006). She played leading roles in the historical dramas Goya's Ghosts (2006) and The Other Boleyn Girl (2008), and also appeared in Thor (2011) and its 2013 sequel. In 2010, Portman starred in the psychological thriller film Black Swan. Her performance received widespread critical acclaim and she earned her first Academy Award for Best Actress, her second Golden Globe Award, the SAG Award, the BAFTA Award and the BFCA Award in 2011. In 2016, she portrayed First Lady Jacqueline Kennedy in the biographical drama Jackie. She was nominated for an Academy Award, a BAFTA Award, a Golden Globe Award, a Screen Actors Guild Award and won the BFCA for Best Actress.\n\nIn May 2008, Portman served as the youngest member of the 61st Annual Cannes Film Festival jury. The same year she directed a segment of the collective film New York, I Love You. Her first feature film as a director, A Tale of Love and Darkness, was released in 2015.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/yBvFSPtUOtuJZWQBkwReTdAD0LU.jpg",
    born: "1981-06-09",
    gender: "Female"
  },
  {
    profession: ["Actor"],
    name: "Amanda Seyfried",
    bio:
      "Amanda Michelle Seyfried (born December 3, 1985) is an American actress and singer. She began her career as a model when she was 11, then at 15 began an acting career, starting off with uncredited roles and moving on to recurring roles on the soap operas As the World Turns and All My Children. Amanda is also noted to be an avid fan of the New York Rangers, her favorite player being Ryan McDonagh. In addition to hockey, Seyfried enjoys professional wrestling and is a fan of independent wrestler Kai Katana.\n\nIn 2004, Seyfried made her film debut in the teen comedy Mean Girls. Her subsequent supporting roles were in independent films, such as the drama Nine Lives(2005) and the crime drama Alpha Dog (2006), she also had a recurring role in the UPN TV drama show Veronica Mars (2004–2006). Between 2006 and 2011, she starred on the HBO drama series Big Love and appeared in the 2008 musical feature film Mamma Mia!.\n\nHer other appearances include leading roles in the black comedy horror film Jennifer's Body (2009), as a call girl in the erotic thriller, Chloe (2009), the romantic drama-war film Dear John (2010), the romantic drama Letters to Juliet (2010), the dark fantasy historical romance Red Riding Hood (2011), the dystopian sci-fi thriller In Time (2011), the thriller Gone (2012), the musical drama film Les Misérables (2012), as the title porn actress in the biographical drama Lovelace (2013), and in the comedies A Million Ways to Die in the West (2014) and Ted 2 (2015).\n\nDescription above from the Wikipedia article Amanda Seyfried, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/dxMX9K2KiHObxeHOmT8eDNCrKfC.jpg",
    born: "1985-12-03",
    gender: "Female"
  },
  {
    profession: ["Actor"],
    name: "Margot Robbie",
    bio:
      "Margot Elise Robbie (born 2 July 1990) is an Australian actress. She is known for her role as Donna Freedman on the soap opera Neighbours, which earned her two Logie Award nominations. In 2011, Robbie began starring as Laura Cameron in the ABC drama series Pan Am. Following Pan Am's cancellation, Robbie has appeared in the feature films About Time, The Wolf of Wall Street, Suicide Squad and many more.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/fVkq9Ky6JbZN4h3TWgaHZzh2MNU.jpg",
    born: "1990-07-02",
    gender: "Female"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Vin Diesel",
    bio:
      "Vin Diesel is an American actor, producer, director, and screenwriter. He came to prominence in the late 1990s, and first became known for appearing in Steven Spielberg's Saving Private Ryan in 1998. He is most known for his portrayals of Riddick in The Chronicles of Riddick trilogy (2001–2013), and of Dominic Toretto in The Fast and the Furious film series (2001–present), two franchises in which he also acted as producer. He also starred in xXx (2002) and Sidney Lumet's Find Me Guilty (2006). His voice acting work includes Brad Bird's The Iron Giant (1999), the video games of The Chronicles of Riddick franchise, and the upcoming Guardians of the Galaxy adaptation of the Marvel comics of the same name. As a filmmaker, Diesel directed, wrote, produced and starred in the drama film Strays, as well as in two short films. He is also the founder of the production companies One Race Films, Racetrack Records, and Tigon Studios.\n\nFrom Wikipedia",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/7rwSXluNWZAluYMOEWBxkPmckES.jpg",
    born: "1967-07-18",
    gender: "Male"
  },
  {
    profession: ["Actor"],
    name: "Jessica Chastain",
    bio:
      "Jessica Chastain (born March 24, 1977) is an American theater, film and television actress. She played guest roles in several television shows before making her feature film debut with the 2008 independent film Jolene. In 2011, Chastain gained wide public recognition for her starring roles in seven film releases; for her performance in The Help she received Best Supporting Actress nominations at the Academy Award, Golden Globe, BAFTA, and Screen Actors Guild Award ceremonies. In 2012, Time magazine featured her as one of the '100 Most Influential People in the World'. Chastain's performance in the 2012 military thriller Zero Dark Thirty and the 2013 horror film Mama led film critic Richard Roeper to describe her as 'one of the finest actors of her generation'. For the former, she won a Golden Globe Award for Best Actress (Drama) and received a nomination for the Academy Award for Best Actress.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/nkFrkn5NZVGWb4b2X0yIcXezhyt.jpg",
    born: "1977-03-24",
    gender: "Female"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Stellan Skarsgård",
    bio:
      "From Wikipedia, the free encyclopedia\n\nStellan John Skarsgård (born 13 June 1951) is a Swedish actor, known internationally for his film roles in Angels &amp; Demons, Breaking the Waves, The Hunt for Red October, Ronin, Good Will Hunting, Pirates of the Caribbean: Dead Man's Chest, Pirates of the Caribbean: At World's End, Dominion: Prequel to the Exorcist, Mamma Mia! and Thor.\n\nDescription above from the Wikipedia article Stellan Skarsgård, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/zSCU2agleLtJEvzj98jEesVhBxa.jpg",
    born: "1951-06-13",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Tom Hardy",
    bio:
      "Edward Thomas 'Tom' Hardy (born 15 September 1977) is an English actor. He is best known for playing the title character in the 2009 British film Bronson, and for his roles in the films Star Trek Nemesis, RocknRolla, and Inception. He has been cast in the Christopher Nolan film The Dark Knight Rises as Bane.  Description above from the Wikipedia Tom Hardy, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/4CR1D9VLWZcmGgh4b6kKuY2NOel.jpg",
    born: "1977-09-15",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Tom Cruise",
    bio:
      "Thomas 'Tom' Cruise (born Thomas Cruise Mapother IV; July 3, 1962) is an American actor and filmmaker. He has been nominated for three Academy Awards and has won three Golden Globe Awards.\n\nHe started his career at age 19 in the 1981 film Endless Love. After portraying supporting roles in Taps (1981) and The Outsiders (1983), his first leading role was in Risky Business, released in August 1983. Cruise became a full-fledged movie star after starring as Pete 'Maverick' Mitchell in Top Gun (1986). He has since 1996 been well known for his role as secret agent Ethan Hunt in the Mission: Impossible film series. One of the biggest movie stars in Hollywood, Cruise has starred in many successful films, including The Color of Money (1986), Cocktail (1988), Rain Man (1988), Born on the Fourth of July (1989), Far and Away(1992), A Few Good Men (1992), The Firm (1993), Interview with the Vampire: The Vampire Chronicles (1994), Jerry Maguire (1996), Eyes Wide Shut (1999), Magnolia (1999), Vanilla Sky (2001), Minority Report (2002),The Last Samurai (2003), Collateral (2004), War of the Worlds (2005), Lions for Lambs (2007), Valkyrie (2008), Knight and Day (2010), Jack Reacher (2012), Oblivion (2013), and Edge of Tomorrow (2014).\n\nIn 2012, Cruise was Hollywood's highest-paid actor. Fifteen of his films grossed over $100 million domestically; twenty-one have grossed in excess of $200 million worldwide. Cruise is known for his support for the Church of Scientology and its affiliated social programs. From: Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/3oWEuo0e8Nx8JvkqYCDec2iMY6K.jpg",
    born: "1962-07-03",
    gender: "Male"
  },
  {
    profession: ["Actor"],
    name: "Gal Gadot",
    bio:
      "Gal Gadot is an Israeli actress and model. She was born in Rosh Ha'ayin, Israel, to an Ashkenazi Jewish family (from Poland, Austria, Germany, and Czechoslovakia). She served in the IDF for two years, and won the Miss Israel title in 2004.\n\nGal began modeling in the late 2000s, and made her film debut in the fourth film of the Fast and Furious franchise, Fast & Furious (2009), as Gisele, an associate of the film's lead villain. Her role was expanded in the sequels Fast Five (2011) and Fast & Furious 6 (2013), in which her character was romantically linked to Han Seoul-Oh (Sung Kang). In the films, Gal performed her own stunts. She also appeared in the 2010 films Date Night (2010) and Knight and Day (2010). In early December 2013, Gal was cast as Wonder Woman in the upcoming superhero team-up film Batman v Superman: Dawn of Justice (2016), with filming beginning in 2014 for a May 2016 release.\n\nGal is a motorcycle enthusiast, and owns a black 2006 Ducati Monster-S2R. She has been married to Yaron Versano since September 28, 2008. They have one child.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/yV2nljqQa3MjrrIK4AllDjmJIcs.jpg",
    born: "1985-04-30",
    gender: "Female"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Gary Oldman",
    bio:
      "Gary Leonard Oldman (born 21 March 1958) is an English actor, filmmaker and musician, well-known to audiences for his portrayals of dark and morally ambiguous characters. He has starred in films such as Sid and Nancy, Prick Up Your Ears, JFK, Dracula, True Romance, Léon, The Fifth Element, The Contender, the Harry Potter film series and the Batman film series, as well as in television shows such as Friends and Fallen Angels.\n\nOldman came to prominence in the mid-1980s with a string of performances that prompted pre-eminent film critic, Roger Ebert, to describe him as 'the best young British actor around'. He has been cited as an influence by a number of successful actors. In addition to leading and central supporting roles in big-budget Hollywood films, Oldman has frequently acted in independent films and television shows. Aside from acting, he directed, wrote and co-produced Nil by Mouth, a film partially based on his own childhood, and served as a producer on several films.\n\nAmong other accolades, Oldman has received Emmy-, Screen Actors Guild-, BAFTA- and Independent Spirit Award nominations for his acting work, and has been described as one of the greatest actors never nominated for an Academy Award. His contributions to the science fiction genre have won him a Saturn Award, with a further two nominations. He was also nominated for the 1997 Palme d'Or and won two BAFTA Awards for his filmmaking on Nil By Mouth. In 2011, Empire readers voted Oldman an 'Icon of Film', in recognition of his contributions to cinema.\n\nDescription above from the Wikipedia article Gary Oldman, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/tofLS5A6lBXNjeROGvgpfe2JwaT.jpg",
    born: "1958-03-21",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Jaeden Lieberher",
    bio: "",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/rCPRfOUdTBdDDAC12mqEv74d7M6.jpg",
    born: "2003-01-04",
    gender: "Male"
  },
  {
    profession: ["Actor"],
    name: "Dakota Johnson",
    bio:
      "Dakota Mayi Johnson (born October 4, 1989) is an American actress and model. She is the daughter of actors Melanie Griffith and Don Johnson. She had her screen debut alongside her mother in the comedy-drama Crazy in Alabama (1999) and was named Miss Golden Globe in 2006. Following high school graduation, she returned to acting with roles in The Social Network (2010), Beastly (2011), 21 Jump Street (2012), Need for Speed (2014) and the short-lived comedy Ben and Kate (2012–2013).\n\nShe received international recognition in 2015 after landing the lead role of Anastasia Steele in the romantic drama Fifty Shades of Grey, which catapulted her to fame and earned her the People's Choice Award for Favorite Dramatic Movie Actress. The same year, she took part in Black Mass and A Bigger Splash, which garnered her a BAFTA Rising Star Award nomination. She also starred in the romantic comedy How to Be Single (2016) and will reprise her role as Anastasia Steele in Fifty Shades Darker (2017) and Fifty Shades Freed (2018).\n\nDescription above from the Wikipedia article Dakota Johnson, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/razONK0A0UUZUCtxLryQwodNzWO.jpg",
    born: "1989-10-04",
    gender: "Female"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Al Pacino",
    bio:
      "Alfredo James 'Al' Pacino (born April 25, 1940) is an American film and stage actor and director. He is famous for playing mobsters, including Michael Corleone in The Godfather trilogy, Tony Montana in Scarface, Alphonse 'Big Boy' Caprice in Dick Tracy and Carlito Brigante in Carlito's Way, though he has also appeared several times on the other side of the law — as a police officer, detective and a lawyer. His role as Frank Slade in Scent of a Woman won him the Academy Award for Best Actor in 1992 after receiving seven previous Oscar nominations.\n\nHe made his feature film debut in the 1969 film Me, Natalie in a minor supporting role, before playing the leading role in the 1971 drama The Panic in Needle Park. Pacino made his major breakthrough when he was given the role of Michael Corleone in The Godfather in 1972, which earned him an Academy Award nomination for Best Supporting Actor. Other Oscar nominations for Best Supporting Actor were for Dick Tracy and Glengarry Glen Ross. Oscar nominations for Best Actor include The Godfather Part II, Serpico, Dog Day Afternoon, the court room drama ...And Justice for All and Scent of a Woman.\n\nIn addition to a career in film, he has also enjoyed a successful career on stage, picking up Tony Awards for Does a Tiger Wear a Necktie? and The Basic Training of Pavlo Hummel. His love of Shakespeare led him to direct his first film with Looking for Richard, a part documentary on the play Richard III. Pacino has received numerous lifetime achievement awards, including one from the American Film Institute. He is a method actor, taught mainly by Lee Strasberg and Charlie Laughton at the Actors Studio in New York. Although he has never married, Pacino has had several relationships with actresses and has three children.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/ks7Ba8x9fJUlP9decBr6Dh5mThX.jpg",
    born: "1940-04-25",
    gender: "Male"
  },
  {
    profession: ["Actor"],
    name: "Lee Chae-dam",
    bio: "",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/lJ2ryu3XGVyP7WESkL3pTigeg8j.jpg",
    born: null,
    gender: "Female"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Ben Affleck",
    bio:
      "Ben Affleck (born Benjamin Géza Affleck-Boldt; August 15, 1972) is an American actor, film director, writer, and producer. He became known in the mid-1990s with his performance in the Kevin Smith films Mallrats (1995) and Chasing Amy (1997). Affleck is an Academy Award as well as a Golden Globe Award winner, along with Matt Damon, for their collaborative screenplay for the 1997 film Good Will Hunting. He established himself as a Hollywood leading man, having starred in several big budget films, such as Armageddon (1998), Pearl Harbor (2001), Changing Lanes (2002), The Sum of All Fears (2002), and Daredevil (2003).\n\nAffleck has drawn critical acclaim for his work as a filmmaker, directing Gone Baby Gone (2007) and The Town (2010), and playing the lead role in the latter. He has worked with his younger brother, actor Casey Affleck, on several projects, including Good Will Hunting and Gone Baby Gone.\n\nAfter a high profile relationship with actress Gwyneth Paltrow in 1998, his relationship with actress/singer Jennifer Lopez attracted worldwide media attention in which Affleck and Lopez were dubbed 'Bennifer'. Following their breakup in 2004, he began dating Jennifer Garner. The two married in June 2005 and have two daughters, Violet Anne, born December 2005, and Seraphina Rose Elizabeth, born January 2009.\n\nAffleck has been actively involved in politics and charitable causes. He and Matt Damon also founded the production company LivePlanet.\n\nDescription above from the Wikipedia article Ben Affleck, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/7Zy12dUasr43oF8hyU5iBz5iOpO.jpg",
    born: "1972-08-15",
    gender: "Male"
  },
  {
    profession: ["Actor"],
    name: "Elle Fanning",
    bio:
      "Mary Elle Fanning (born April 9, 1998) is an American actress and singer. She is the younger sister of actress Dakota Fanning and mainly known for her starring roles in Phoebe in Wonderland, Somewhere, Maleficent, About Ray, and as Jesse in 2016's The Neon Demon.\n\nIn 2011, Fanning starred in her breakout role as Alice Dainard in J. J. Abrams' sci-fi-drama, Super 8. For this role, she received positive reviews and was often cited as one of the film's best aspects.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/mRTEfRMHjfVUdNjfmV8WHjKiEI6.jpg",
    born: "1998-04-09",
    gender: "Female"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Lorina Kamburova",
    bio: "",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/6CvsofN6xEZOOxTeGLfj5kzZaV5.jpg",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Harrison Ford",
    bio:
      "Legendary Hollywood Icon Harrison Ford was born on July 13, 1942 in Chicago, Illinois.  His family history includes a strong lineage of actors, radio personalities, and models.  Harrison attended public high school in Park Ridge, Illinois where he was a member of the school Radio Station WMTH. Harrison worked as the lead voice for sports reporting at WMTH for several years.  Acting wasn’t a major interest to Ford until his junior year at Ripon College when he first took an acting class.  Harrison Ford’s career started in 1964 when he travelled to California in search of a voice-over job. He never received that position, but instead signed a contract with Columbia Pictures where he earned $150 weekly to play small fill in roles in various films.  Through the 60’s Harrison worked on several TV shows including Gunsmoke, Ironside, Kung Fu, and American Style.  It wasn’t until 1967 that Harrison received his first credited role in the Western film, A Time for Killing. Dissatisfied with the meager roles he was being offered, Ford took a hiatus from acting to work as a self-employed carpenter. This seemingly odd diversion turned out to be a blessing in disguise for Harrison’s acting career when he was soon hired by famous film producer George Lucas.  This was a turning point in Harrison’s life that led to him be casted in milestone roles such as Hans Solo and Indiana Jones.  Since his most famous roles in the Star Wars Trilogy and Raiders of the Lost Ark, Harrison Ford has starred in over 40 films.  Many criticize his recent work, saying his performances have been lackluster leading to commercially disappointing films.  Harrison has always worked hard to protect his off-screen private life, keeping details about his children and marriages quite.  He has a total of five children including one recent adoption with third and current wife Calista Flockhart. In addition to acting Harrison Ford is passionate about environmental conservation, aviation, and archeology.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/7LOTdRfHU1H1qHBxpUv3jT04eWB.jpg",
    born: "1942-07-13",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Anthony Hopkins",
    bio:
      "Anthony Hopkins was born on 31 December 1937, in Margam, Glamorgan, Wales. Influenced by Richard Burton, he decided to study at College of Music and Drama in Cardiff and graduated in 1957. In 1965, he moved to London and joined the National Theatre, invited by Laurence Olivier, who could see the talent in Hopkins. In 1967, he made his first film for television, A Flea in Her Ear (1967) (TV).\n\nFrom this moment on, he enjoyed a successful career in cinema and television. In 1968, he worked on The Lion in Winter (1968) with Timothy Dalton. Many successes came later, and Hopkins' remarkable acting style reached the four corners of the world. In 1977, he appeared in two major films: A Bridge Too Far (1977) with James Caan, Gene Hackman, Sean Connery, Michael Caine, Elliott Gould and Laurence Olivier, and Maximilian Schell. In 1980, he worked on The Elephant Man (1980). Two good television literature adaptations followed: Othello (1981) (TV) and 'Hallmark Hall of Fame: The Hunchback of Notre Dame (#31.2)' (1982). In 1987 he was awarded with the Commander of the order of the British Empire. This year was also important in his cinematic life, with 84 Charing Cross Road (1987), acclaimed by specialists. In 1993, he was knighted.\n\nIn the 1990s, Hopkins made movies like Desperate Hours (1990) and Howards End (1992), The Remains of the Day (1993) (nominee for the Oscar), Legends of the Fall (1994), Nixon (1995) (nominee for the Oscar), Surviving Picasso (1996), Amistad (1997) (nominee for the Oscar), The Mask of Zorro (1998), Meet Joe Black (1998) and Instinct (1999). His most remarkable film, however, was The Silence of the Lambs (1991), for which he won the Oscar for Best Actor. He also got a BAFTA for this role. IMDb Mini Biography By: Emerenciano",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/jdoBTIru71FbPuHGEgox5RVmIO0.jpg",
    born: "1937-12-31",
    gender: "Male"
  },
  {
    profession: ["Actor"],
    name: "Marion Cotillard",
    bio:
      "Marion Cotillard (born 30 September 1975) is a French actress. She garnered critical acclaim for her roles in films such as My Sex Life... or How I Got Into an Argument, Taxi, Furia, Pretty Things and Inception.\n\nShe won the Academy Award for Best Actress, BAFTA Award for Best Actress, César for Best Actress and the Golden Globe for Best Actress in Musical or a Comedy for her portrayal of French singer Édith Piaf in La Vie en Rose. She made film history by becoming the first person to win an Academy Award for a French language performance. In 2010 she received a Golden Globe nomination for her performance in the musical Nine.\n\nCotillard, in addition to her film work, is interested in environmental activism and participated in campaigns for environmental protection. Cotillard used her high public profile to bring attention to the aims of Greenpeace, working for the environmental organization as a spokesperson, allowing the organization to use her apartment to test products. In 2005, she also contributed to Dessins pour le climat (“Drawings for the Climate”), a book of drawings published by Greenpeace to raise funds for the group.\n\nCotillard currently lives with French actor and director Guillaume Canet. Many reports say the couple prefers to live a simple lifestyle, and they are often spotted in cafes and shopping together in Paris. Neither star discusses their relationship with the media, although photos of the couple being affectionate regularly surface in the European tabloids.\n\nShe is a fan of Radiohead and Canadian singer Hawksley Workman; she has appeared in two of the latter's music videos, most notably 'No Reason to Cry Out your Eyes (On the Highway Tonight)'. Workman even revealed in interviews about his last album Between The Beautifuls that he worked and wrote songs with Cotillard while they both were in Los Angeles during the movie awards season.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/eSRyCYy2qiGIRodOV5eZJJRZIyP.jpg",
    born: "1975-09-30",
    gender: "Female"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Robert De Niro",
    bio:
      "Robert De Niro, Jr. (born August 17, 1943) is an American actor, director, and producer.\n\nHis first major film role was in 1973's Bang the Drum Slowly. In 1974, he played the young Vito Corleone in The Godfather Part II, a role that won him the Academy Award for Best Supporting Actor. His longtime collaboration with Martin Scorsese began with 1973's Mean Streets, and earned De Niro an Academy Award for Best Actor for his portrayal of Jake LaMotta in the 1980 film, Raging Bull. He was also nominated for an Academy Award for his roles in Scorsese's Taxi Driver (1976) and Cape Fear (1991). In addition, he received nominations for his acting in Michael Cimino's The Deer Hunter (1978) and Penny Marshall's Awakenings (1990).\n\nHe has received high critical praise in Scorsese's films such as for his portrayals as Travis Bickle in Taxi Driver, Jake Lamotta in Raging Bull, and as Jimmy Conway in Goodfellas. He has earned four nominations for the Golden Globe Award for Best Actor – Motion Picture Musical or Comedy: New York, New York (1977), Midnight Run (1988), Analyze This (1999) and Meet the Parents (2000). He directed A Bronx Tale (1993) and The Good Shepherd (2006).",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/lvTSwUcvJRLAJ2FB5qFaukel516.jpg",
    born: "1943-08-17",
    gender: "Male"
  },
  {
    profession: ["Actor"],
    name: "Tessa Thompson",
    bio:
      "Tessa Lynne Thompson (born October 3, 1983) is an American actress. She is perhaps best-known for the role of Jackie Cook on the TV series Veronica Mars.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/fycqdiiM6dsNSbnONBVVQ57ILV1.jpg",
    born: "1983-10-03",
    gender: "Female"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Brad Pitt",
    bio:
      "William Bradley 'Brad' Pitt (born December 18, 1963) is an American actor and film producer. Pitt has received two Academy Award nominations and four Golden Globe Award nominations, winning one. He has been described as one of the world's most attractive men, a label for which he has received substantial media attention. Pitt began his acting career with television guest appearances, including a role on the CBS prime-time soap opera Dallas in 1987. He later gained recognition as the cowboy hitchhiker who seduces Geena Davis's character in the 1991 road movie Thelma & Louise. Pitt's first leading roles in big-budget productions came with A River Runs Through It (1992) and Interview with the Vampire (1994). He was cast opposite Anthony Hopkins in the 1994 drama Legends of the Fall, which earned him his first Golden Globe nomination. In 1995 he gave critically acclaimed performances in the crime thriller Seven and the science fiction film 12 Monkeys, the latter securing him a Golden Globe Award for Best Supporting Actor and an Academy Award nomination.\n\nFour years later, in 1999, Pitt starred in the cult hit Fight Club. He then starred in the major international hit as Rusty Ryan in Ocean's Eleven (2001) and its sequels, Ocean's Twelve (2004) and Ocean's Thirteen (2007). His greatest commercial successes have been Troy (2004) and Mr. & Mrs. Smith (2005).\n\nPitt received his second Academy Award nomination for his title role performance in the 2008 film The Curious Case of Benjamin Button. Following a high-profile relationship with actress Gwyneth Paltrow, Pitt was married to actress Jennifer Aniston for five years. Pitt lives with actress Angelina Jolie in a relationship that has generated wide publicity. He and Jolie have six children—Maddox, Pax, Zahara, Shiloh, Knox, and Vivienne.\n\nSince beginning his relationship with Jolie, he has become increasingly involved in social issues both in the United States and internationally. Pitt owns a production company named Plan B Entertainment, whose productions include the 2007 Academy Award winning Best Picture, The Departed.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/kU3B75TyRiCgE270EyZnHjfivoq.jpg",
    born: "1963-12-18",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Paulo César Peréio",
    bio: "",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/ukpgW58r0fKQMPK8OvAhycPJg4d.jpg",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Christian Bale",
    bio:
      "Christian Charles Philip Bale is a Welsh-born English actor. In addition to starring roles in big budget Hollywood films, he has long been heavily involved in films produced by independent producers and art houses. Bale first caught the public eye when he was cast in the starring role of Steven Spielberg's Empire of the Sun at the age of 13, playing an English boy who is separated from his parents and subsequently finds himself lost in a Japanese internment camp during World War II. Since then, he has portrayed a wide range of characters. Bale is especially noted for his cult following: the tenth anniversary issue of Entertainment Weekly hailed him as one of the 'Top 8 Most Powerful Cult Figures of the Past Decade', citing his cult status on the Internet. EW called Bale one of the 'Most Creative People in Entertainment' in anticipation of the release American Psycho (2000). The Guardian named Bale as one of the best actors never to have received an Academy Award nomination.\n\nBale was born in Haverfordwest, Pembrokeshire, Wales to parents of English descent. His father, David Bale, was an entrepreneur, commercial pilot, and talent manager and his mother, Jenny James, was a circus clown and performer. He is the youngest of four children. After leaving Wales in 1976, Bale spent his childhood in several countries, including England, Portugal and the United States. Settling for four years in Bournemouth and Henley-on-Thames, Bale was educated at Shiplake C of E Primary School, the independent Dolphin School in Berkshire, and at Bournemouth School. He participated actively in rugby union. Bale has described his childhood, with respect to his mother being in the circus, as 'interesting'. He recalled his first kiss was with an acrobat named Barta. As a child, he trained in ballet and guitar. His sister Louise's work in theatre also influenced his decision to become an actor. Bale's father was very supportive of his son's acting, resigning from his job as a commercial pilot to travel and manage Bale's burgeoning career. Bale's first foray into acting was a commercial for the fabric softener Lenor in 1982, when he was eight years old. He appeared in a Pac-Man cereal commercial playing a child rock star a year later and in 1984 made his stage debut in The Nerd, opposite Rowan Atkinson.\n\nOn 29 January, 2000, Bale married Sandra 'Sibi' Blažić (born 1970), a one-time model, make-up artist and personal assistant to Winona Ryder; the couple have a daughter, Emmeline, who was born on 27 March 2005, in Santa Monica, California. Since 1992, Bale has resided in Los Angeles.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/2ocrTd8ChuUyJOzMuD4PsQw8eCB.jpg",
    born: "1974-01-30",
    gender: "Male"
  },
  {
    profession: ["Actor"],
    name: "Amy Adams",
    bio:
      "Amy Lou Adams was born in Vicenza, Veneto, Italy, to American parents Kathryn (Hicken) and Richard Kent Adams, while her father was a U.S. serviceman. She was raised in a Mormon family of seven children in Castle Rock, Colorado, and has English, as well as smaller amounts of Danish, Swiss-German, and Norwegian, ancestry.\n\nAdams sang in the school choir at Douglas County High School and was an apprentice dancer at a local dance company, with the ambition of becoming a ballerina. However, she worked as a greeter at The Gap and as a Hooters hostess to support herself before finding work as a dancer at Boulder's Dinner Theatre and Country Dinner Playhouse in such productions as 'Brigadoon' and 'A Chorus Line'. It was there that she was spotted by a Minneapolis dinner-theater director who asked her to move to Chanhassen, Minnesota for more regional dinner theater work.\n\nNursing a pulled muscle that kept her from dancing, she was free to audition for a part in Drop Dead Gorgeous (1999), which was filming nearby in Minnesota. During the filming, Kirstie Alley encouraged her to move to Los Angeles, where she soon won a part in the Fox television version of the film, Cruel Intentions (1999), in the part played in the film by Sarah Michelle Gellar, 'Kathryn Merteuil'. Although three episodes were filmed, the troubled series never aired. Instead, parts of the episodes were cobbled together and released as the direct-to-video Cruel Intentions 2 (2000). After more failed television spots, she landed a major role in Catch Me If You Can (2002), playing opposite Leonardo DiCaprio. But this did not provide the break-through she might have hoped for, with no work being offered for about a year. She eventually returned to television, and joined the short-lived series, Dr. Vegas (2004).\n\nHer role in the low-budget independent film Junebug (2005) (which was shot in 21 days) got her real attention, including an Academy Award nomination for Best Supporting Actress as well as other awards. The following year, her ability to look like a wide-eyed Disney animated heroine helped her to be chosen from about 300 actresses auditioning for the role of 'Giselle' in the animated/live-action feature film, Enchanted (2007), which would prove to be her major break-through role. Her vivacious yet innocent portrayal allowed her to use her singing and dancing talents. Her performance garnered a Golden Globe Award nomination for Best Actress in a Motion Picture Musical or Comedy.\n\nAdams next appeared in the major production, Charlie Wilson's War (2007), and went on to act in the independent film, Sunshine Cleaning (2008), which premiered at the 2008 Sundance Film Festival. Her role as 'Sister James' in Doubt (2008) brought her a second Academy Award nomination for Best Supporting Actress, as well as nominations for a Golden Globe, a Screen Actors Guild award, and a British Academy Film award. She appeared as Amelia Earhart in Night at the Museum: Battle of the Smithsonian (2009) and as a post-9/11 hot line counselor, aspiring writer, amateur cook and blogger in Julie & Julia (2009). More recently, she starred with Jason Segel in The Muppets (2011) and alongside Clint Eastwood in Trouble with the Curve (2012).",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/tk5eWJcOBr9uRefeUm9ntvehbLA.jpg",
    born: "1974-08-20",
    gender: "Female"
  },
  {
    profession: ["Actor"],
    name: "Kate Winslet",
    bio:
      "Kate Elizabeth Winslet (born 5 October 1975) is an English actress and occasional singer. She has received multiple awards and nominations. She is the youngest person to accrue six Academy Award nominations, and won the Academy Award for Best Actress for The Reader (2008).\n\nWinslet has been acclaimed for both dramatic and comedic work in projects ranging from period to contemporary films, and from major Hollywood productions to less publicised indie films. She has won awards from the Screen Actors Guild, British Academy of Film and Television Arts, and the Hollywood Foreign Press Association among others, and has been nominated for an Emmy Award for television acting. Raised in Berkshire, Winslet studied drama from childhood, and began her career in British television in 1991.\n\nShe made her film debut in Heavenly Creatures (1994), for which she received her first notable critical praise. She achieved recognition for her subsequent work in a supporting role in Sense and Sensibility (1995) and for her leading role in Titanic (1997), the highest grossing film at the time. Since 2000, Winslet's performances have continued to draw positive comments from film critics, and she has been nominated for various awards for her work in such films as Quills (2000), Iris (2001), Eternal Sunshine of the Spotless Mind (2004), Finding Neverland (2004), Little Children (2006), The Reader (2008) and Revolutionary Road (2008). Her performance in the latter prompted New York magazine to describe her as 'the best English-speaking film actress of her generation'. The romantic comedy The Holiday and the animated film Flushed Away (both 2006) were among the biggest commercial successes of her career.\n\nWinslet was awarded a Grammy Award for Best Spoken Word Album for Children in 2000. She has been included as a vocalist on some soundtracks of works she has performed in, and the single 'What If' from the soundtrack for Christmas Carol: The Movie (2001), was a hit single in several European countries. Winslet has a daughter with her former husband, Jim Threapleton, and a son with her second husband, Sam Mendes, from whom she is separated. She lives in New York City. Description above from the Wikipedia article Kate Winslet, licensed under CC-BY-SA, full list of contributors on Wikipedia,",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/e3tdop3WhseRnn8KwMVLAV25Ybv.jpg",
    born: "1975-10-05",
    gender: "Female"
  },
  {
    profession: ["Actor"],
    name: "Danielle Panabaker",
    bio:
      "From Wikipedia, the free encyclopedia\n\nDanielle Nicole Panabaker (born September 19, 1987) is an American actress. She was a cast member in the CBS drama Shark, and appeared in the films Mr. Brooks, Sky High, and Friday the 13th, among other projects. She is best known to younger audiences for her roles in the Disney Channel films Stuck in the Suburbs and Read It and Weep along with her younger sister Kay Panabaker.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/faX0EDc44GL5ZcsEcxTOBcfWpCP.jpg",
    born: "1987-09-19",
    gender: "Female"
  },
  {
    profession: ["Actor"],
    name: "Keira Knightley",
    bio:
      "Keira Christina Knightley (born 26 March 1985) is an English actress and model. She began acting as a child and came to international prominence in 2002 after co-starring in the films Bend It Like Beckham and Pirates of the Caribbean: The Curse of the Black Pearl. Knightley has appeared in several Hollywood films and earned nominations for the Academy Award for Best Actress and Golden Globe Award for Best Actress for her role as Elizabeth Bennet in Joe Wright's 2005 adaptation of Jane Austen's novel Pride and Prejudice. Two years later she again was nominated for the Golden Globe Award for Best Actress, as well as the BAFTA Award for Best Actress in a Leading Role for her performance in Atonement. In 2008, Forbes claimed Knightley to be the second highest paid actress in Hollywood, having reportedly earned $32 million in 2007, making her the only non-American on the list of highest paid actresses.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/irLxeFMXw2phPH7okxHInBhs6jb.jpg",
    born: "1985-03-26",
    gender: "Female"
  },
  {
    profession: ["Actor"],
    name: "Meryl Streep",
    bio:
      "Mary Louise 'Meryl' Streep (born June 22, 1949) is an American actress who has worked in theatre, television and film. She is widely regarded as one of the most talented and respected actresses of the modern era. Streep made her professional stage debut in 1971's The Playboy of Seville, before her screen debut in the television movie The Deadliest Season in 1977. In that same year, she made her film debut with Julia. Both critical and commercial success came quickly with roles in The Deer Hunter (1978) and Kramer vs. Kramer (1979), the former giving Streep her first Oscar nomination and the latter her first win. She later won an Academy Award for Best Actress for her performance in Sophie's Choice (1982). Streep has received 16 Academy Award nominations, winning two, and 25 Golden Globe nominations, winning seven, more nominations than any other actor in the history of either award. Her work has also earned her two Emmy Awards, two Screen Actors Guild Awards, a Cannes Film Festival award, four New York Film Critics Circle Awards, five Grammy Award nominations, a BAFTA award, an Australian Film Institute Award and a Tony Award nomination, amongst others. She was awarded the American Film Institute's Lifetime Achievement Award in 2004. Description above from the Wikipedia article Meryl Streep, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/xqL5IJxV0fDeD3OfkS3eWqwJoGV.jpg",
    born: "1949-06-22",
    gender: "Female"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Arnold Schwarzenegger",
    bio:
      "Arnold Alois Schwarzenegger (born July 30, 1947) is an Austrian-American former professional bodybuilder, actor, model, businessman and politician who served as the 38th Governor of California (2003–2011).\n\nSchwarzenegger began weight training at 15. He was awarded the title of Mr. Universe at age 20 and went on to win the Mr. Olympia contest a total of seven times. Schwarzenegger has remained a prominent presence in the sport of bodybuilding and has written several books and numerous articles on the sport.\n\nSchwarzenegger gained worldwide fame as a Hollywood action film icon, noted for his lead roles in such films as Conan the Barbarian, The Terminator, Commando and Predator. He was nicknamed the 'Austrian Oak' and the 'Styrian Oak' in his bodybuilding days, 'Arnie' during his acting career and more recently the 'Governator' (a portmanteau of 'Governor' and 'Terminator').\n\nArnold has starred in many films. Most notably are the following...\n\nHercules in New York as Hercules (1970)  Stay Hungry as Joe Santo (1976)  Pumping Iron as himself (1977)  The Villain as Handsome Stranger (1979)  The Jayne Mansfield Story as Mickey Hargitay (1980)  Conan the Barbarian as Conan (1982)  Conan the Destroyer as Conan (1984)  The Terminator as The Terminator/T-800 Model 101 (1984)  Red Sonja as Kalidor (1985)  Commando as John Matrix (1985)  Raw Deal as Mark Kaminsky, a.k.a. Joseph P. Brenner (1986)  Predator as Major Alan 'Dutch' Schaeffer (1987)  The Running Man as Ben Richards (1987)  Red Heat as Captain Ivan Danko (1988)  Twins as Julius Benedict (1988)  Total Recall as Douglas Quaid/Hauser (1990)  Kindergarten Cop as Detective John Kimble (1990)  Terminator 2: Judgment Day as The Terminator/T-800 Model 101 (1991)  Last Action Hero as Jack Slater / Himself (1993)  True Lies as Harry Tasker (1994)  Junior as Dr. Alex Hesse (1994)  Eraser as U.S. Marshal John Kruger (1996)  Jingle All the Way as Howard Langston (1996)  Batman and Robin as Mr. Freeze (1997)  End of Days as Jericho Cane (1999)  The 6th Day as Adam Gibson / Adam Gibson Clone (2000)  Collateral Damage as Gordy Brewer (2002)  Terminator 3: Rise of the Machines as The Terminator/T-850 Model 101 (2003)  Around the World in 80 Days as Prince Hapi (2004)  The Expendables as Trench (2010)  The Expendables 2 as Trench (2012)  The Last Stand as Sheriff Ray Owens (2013)  Escape Plan as Rottmayer (2013)  Sabotage as John 'Breacher' Wharton (2014)  The Expendables 3 as Trench (2014)  Maggie as Wade Vogel (2015)  Terminator Genisys as The Terminator/T-800 Model 101/ The Guardian (2015)  Aftermath as Roman Melnik (2017)  Killing Gunther as Gunther (2017)  Journey to China: The Mystery of Iron Mask (2017)  Triplets as Julius Benedict (2018)  The Expendables 4 as Trench (2018)  Terminator 6 as The Terminator/T-800 Model 101 (2019)",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/zooXFWF1JtrV7UnZyGRxXDW11qt.jpg",
    born: "1947-07-30",
    gender: "Male"
  },
  {
    profession: ["Actor"],
    name: "Angelina Jolie",
    bio:
      "Angelina Jolie is an American actress. She has received an Academy Award, two Screen Actors Guild Awards, and three Golden Globe Awards. Jolie has promoted humanitarian causes throughout the world, and is noted for her work with refugees as a Goodwill Ambassador for the United Nations High Commissioner for Refugees (UNHCR). She has been cited as one of the world's most beautiful women and her off-screen life is widely reported. Though she made her screen debut as a child alongside her father Jon Voight in the 1982 film Lookin' to Get Out, Jolie's acting career began in earnest a decade later with the low-budget production Cyborg 2 (1993). Her first leading role in a major film was in Hackers (1995). She starred in the critically acclaimed biographical films George Wallace (1997) and Gia (1998), and won an Academy Award for Best Supporting Actress for her performance in the drama Girl, Interrupted (1999). Jolie achieved wider fame after her portrayal of video game heroine Lara Croft in Lara Croft: Tomb Raider (2001), and since then has established herself as one of the best-known and highest-paid actresses in Hollywood. She has had her biggest commercial successes with the action-comedy Mr. &amp; Mrs. Smith (2005) and the animated film Kung Fu Panda (2008). Divorced from actors Jonny Lee Miller and Billy Bob Thornton, Jolie currently lives with actor Brad Pitt, in a relationship that has attracted worldwide media attention. Jolie and Pitt have three adopted children, Maddox, Pax, and Zahara, as well as three biological children, Shiloh, Knox, and Vivienne.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/6tocswK39SrSjZIRDaTpVyPxDz8.jpg",
    born: "1975-06-04",
    gender: "Female"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Robin Williams",
    bio:
      "From Wikipedia, the free encyclopedia.\n\nRobin McLaurin Williams (July 21, 1951 – August 11, 2014) was an  American actor and stand-up comedian. Rising to fame with his role as  the alien Mork in the TV series Mork &amp; Mindy  (1978–1982), Williams  went on to establish a successful career in both  stand-up comedy and  feature film acting. His film career included such  acclaimed films as  'The World According to Garp' (1982), Good Morning, Vietnam (1987), Dead  Poets Society (1989), Awakenings (1990), The Fisher King (1991), and  Good Will Hunting (1997), as well as financial successes such as Popeye  (1980), Hook (1991), Aladdin (1992), Mrs. Doubtfire (1993), Jumanji  (1995), The Birdcage (1996), Night at the Museum (2006), and Happy Feet  (2006).\n\nHe also appeared in the video 'Don't Worry, Be Happy' by Bobby  McFerrin.  Nominated for the Academy Award for Best Actor three times, Williams  received the Academy Award for Best Supporting Actor for his performance  in Good Will Hunting (1997). He also received two Emmy Awards, four  Golden Globe Awards, two Screen Actors Guild Awards and five Grammy  Awards.\n\nOn August 11, 2014, Williams was found unconscious at his residence and  was pronounced dead at the scene. The Marin County, California,  coroner's office said they believe the cause of death was asphyxiation.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/5KebSMXT8uj2D0gkaMFJ8VEp53.jpg",
    born: "1951-07-21",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Finn Wolfhard",
    bio:
      "Finn Wolfhard is a Canadian child actor. He is best known for his roles as Mike Wheeler in the supernatural Netflix TV series Stranger Things and Richie 'Trash Mouth' Tozier in the remake of It (2017). He has also appeared in numerous music videos.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/xovGi4x7OXG8ZUfljIoWLexV7fM.jpg",
    born: "2002-12-23",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Bruce Willis",
    bio:
      "Walter Bruce Willis, better known as Bruce Willis, is an American actor and producer. His career began in television in the 1980s and has continued both in television and film since, including comedic, dramatic, and action roles. He is well known for the role of John McClane in the Die Hard series.\n\nWillis was born in Idar-Oberstein, West Germany, the son of a Kassel-born German, Marlene, who worked in a bank, and David Willis, an American soldier. Willis is the eldest of four children.\n\nAt the premiere for the film Stakeout, Willis met actress Demi Moore. They married on November 21, 1987 and had three daughters before the couple divorced on October 18, 2000.\n\nSince the divorce he has dated models Maria Bravo Rosado and Emily Sandberg; he was engaged to Brooke Burns until they broke up in 2004 after ten months together. He married Emma Heming on March 21, 2009.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/kI1OluWhLJk3pnR19VjOfABpnTY.jpg",
    born: "1955-03-19",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Bill Pullman",
    bio:
      "William James 'Bill' Pullman (born December 17, 1953) is an American film, television, and stage actor. Pullman made his film debut in the supporting role of Earl Mott in the 1986 film Ruthless People. He has since gone on to star in other films, including Spaceballs, Independence Day, Lost Highway, Casper and Scary Movie 4. He has starred in a number of plays and is also a Jury Member for Filmaka.\n\nDescription above from the Wikipedia article Bill Pullman, licensed under CC-BY-SA, full list of contributors on Wikipedia",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/pIpTEQVbDif8m8OdjAxQKNCj0D6.jpg",
    born: "1953-12-17",
    gender: "Male"
  },
  {
    profession: ["Actor"],
    name: "Rebecca Ferguson",
    bio:
      "Rebecca Louisa Ferguson Sundström (born 19 October 1983), known professionally as Rebecca Ferguson, is a Swedish actress. She played the lead role in the soap-opera Nya tider and later played Chrissy in the Swedish-American soap Ocean Ave.. Ferguson has also appeared in movies, including A One-Way Trip to Antibes, the horror film Strandvaskaren and the upcoming film Vi alongside Gustaf Skarsgård. Ferguson's role in The White Queen has been met with some praise. \n\nFerguson grew up in the Vasastaden district in central Stockholm. Today she lives with her boyfriend and young child in the seaside town of Simrishamn, on the Swedish south coast. Ferguson has said she wanted to get away from city life and the public spotlight following her soap opera success. In Simrishamn, she started drifting away from acting, ran an Argentine dance studio, and also worked on several short film art projects. Swedish director Richard Hobert spotted her at the town market in 2011. He recognized her and this led to her starring in his film A One - Way to Antibes.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/5i3268fkFMTvUcqlQ9gycMwTfeU.jpg",
    born: "1983-10-19",
    gender: "Female"
  },
  {
    profession: ["Actor", "Producer"],
    name: "John Travolta",
    bio:
      "John Joseph Travolta is an American actor, dancer and singer. He first became known in the 1970s, after appearing on the television series Welcome Back, Kotter and starring in the box office successes Saturday Night Fever and Grease. Travolta's career re-surged in the 1990s, with his role in Pulp Fiction, and he has since continued starring in Hollywood films, including Face/Off, Ladder 49 and Wild Hogs. Travolta has twice been nominated for the Academy Award for Best Actor. The first, for his role in Saturday Night Fever and the second for Pulp Fiction. He won the Golden Globe Award for Best Actor - Motion Picture Musical or Comedy for his performance in Get Shorty.\n\nTravolta, the youngest of six children, was born and raised in Englewood, New Jersey, an inner-ring suburb of New York City. His father, Salvatore Travolta, was a semi-professional football player turned tire salesman and partner in a tire company. His mother, Helen Cecilia, was an actress and singer who had appeared in The Sunshine Sisters, a radio vocal group, and acted and directed before becoming a high school drama and English teacher. His siblings are Joey, Ellen, Ann, Margaret, and Sam Travolta. Travolta's father was a second-generation Italian American and his mother was Irish American; he grew up in an Irish-American neighborhood and has said that his household was predominantly Irish in culture. His family was Roman Catholic.\n\nTravolta married actress Kelly Preston in 1991. The couple had a son, Jett, (April 13, 1992 - January 2, 2009), and have a daughter, Ella Bleu, born in 2000. On May 18, 2010, Travolta and Preston announced that she is pregnant with the couple's third child. The couple has regularly attended marriage counselling, and Travolta admits that therapy has helped the marriage. Travolta was involved with actress Diana Hyland, whom he met while filming The Boy in the Plastic Bubble; the relationship ended when she died of breast cancer in 1977.\n\nTravolta is a certified pilot and owns five aircraft, including an ex-Australian Boeing 707–138 airliner. The plane bears the name Jett Clipper Ella in honor of his children. His $4.9 million estate in the Jumbolair subdivision in Ocala, Florida, is situated on Greystone Airport with its own runway and taxiway right to his front door.\n\nTravolta has been a practitioner of Scientology since 1975 when he was given the book Dianetics while filming the movie The Devil's Rain in Durango, Mexico.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/ns8uZHEHzV18ifqA9secv8c2Ard.jpg",
    born: "1954-02-18",
    gender: "Male"
  },
  {
    profession: ["Actor"],
    name: "Christina Ricci",
    bio:
      "Christina Ricci (born February 12, 1980) is an American actress. Ricci received initial recognition and praise as a child star for her performance as Wednesday Addams in The Addams Family (1991) and Addams Family Values (1993), and her role as Kat Harvey in Casper (1995). Ricci made a transition into more adult-oriented roles with The Ice Storm (1997), followed by an acclaimed performance in The Opposite of Sex (1998), for which she received a Golden Globe nomination for Best Actress. She continued her success with well-received performances in Sleepy Hollow (1999) and Monster (2003). Ricci has appeared in the films Black Snake Moan (2007), Penelope (2008), Speed Racer (2008), New York, I Love You (2009) and After.Life (2009) opposite Liam Neeson.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/dzB58d6fNrTEi7nBAU1tySJc2at.jpg",
    born: "1980-02-12",
    gender: "Female"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Edward Norton",
    bio:
      "Edward Harrison Norton (born August 18, 1969) is an American actor, screenwriter, film director and producer. In 1996, his supporting role in the courtroom drama Primal Fear garnered him a nomination for the Academy Award for Best Supporting Actor. Two years later, his lead role as a reformed white power skinhead in American History X earned a nomination for Academy Award for Best Actor. His other films include period dramas such as Kingdom of Heaven (2005), The Illusionist (2006), and The Painted Veil (2006); and other notable films such as Rounders (1998), Fight Club (1999), 25th Hour (2002), Red Dragon (2002), and The Incredible Hulk (2008).\n\nIn addition to acting, Norton is also a writer and director. He made his directorial debut with the film Keeping the Faith (2000) and is slated to direct the film adaptation of the novel Motherless Brooklyn. Norton did uncredited work on the scripts for The Score, Frida, and The Incredible Hulk.\n\nIn his private life, Norton is an environmental and social activist. He is a member of the board of trustees of Enterprise Community Partners, a non-profit organization for developing affordable housing, founded by his grandfather, James Rouse. Norton is president of the American branch of the Maasai Wilderness Conservation Trust. He ran in the 2009 New York City Marathon to raise money for the Trust. He also raises money for charity through Crowdrise, a social networking community for volunteers and a micro-donations fundraising platform. In July 2010, Norton was designated as the United Nations Goodwill Ambassador for Biodiversityby UN Secretary-General Ban Ki-moon.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/eIkFHNlfretLS1spAcIoihKUS62.jpg",
    born: "1969-08-18",
    gender: "Male"
  },
  {
    profession: ["Actor"],
    name: "Kim Hwa-Yeon",
    bio: "",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/1Z1LgRhD9OTot7kvwv0baVl3oFk.jpg",
    born: "1985-06-13",
    gender: "Female"
  },
  {
    profession: ["Actor"],
    name: "Vera Farmiga",
    bio:
      "Vera Ann Farmiga (born August 6, 1973) is an American actress and director. Farmiga made her film debut in the 1998 drama thriller Return to Paradise. This was followed by supporting roles in the 2000 romantic film Autumn in New York and the 2001 television series UC: Undercover. She was also cast in the 2001 thriller 15 Minutes. Her other film appearances and roles include the 2003 comedy Dummy, the 2004 drama Down to the Bone, the 2006 crime thriller The Departed, the 2007 horror Joshua, and the 2008 drama The Boy in the Striped Pyjamas. Farmiga gained critical acclaim following her work in the 2009 comedy-drama Up in the Air, for which she was nominated for an Academy Award, a BAFTA Award, a Golden Globe Award, and a Screen Guild Actors Award. She also starred as Kate Coleman in Orphan in 2009. Her latest appearance was in the critically acclaimed 2011 thriller/action movie Source Code, as Capt. Colleen Goodwin.\n\nDescription above from the Wikipedia article Vera Farmiga, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/oWZfxv4cK0h8Jcyz1MvvT2osoAP.jpg",
    born: "1973-08-06",
    gender: "Female"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Clint Eastwood",
    bio:
      "Clinton 'Clint' Eastwood, Jr. (born May 31, 1930) is an American film actor, director, producer, composer and politician. Following his breakthrough role on the TV series Rawhide (1959–65), Eastwood starred as the Man with No Name in Sergio Leone's Dollars Trilogy of spaghetti westerns (A Fistful of Dollars, For a Few Dollars More, and The Good, the Bad and the Ugly) in the 1960s, and as San Francisco Police Department Inspector Harry Callahan in the Dirty Harry films (Dirty Harry, Magnum Force, The Enforcer, Sudden Impact, and The Dead Pool) during the 1970s and 1980s. These roles, along with several others in which he plays tough-talking no-nonsense police officers, have made him an enduring cultural icon of masculinity.\n\nEastwood won Academy Awards for Best Director and Producer of the Best Picture, as well as receiving nominations for Best Actor, for his work in the films Unforgiven (1992) and Million Dollar Baby (2004). These films in particular, as well as others including Play Misty for Me (1971), The Outlaw Josey Wales (1976), Pale Rider (1985), In the Line of Fire (1993), The Bridges of Madison County (1995), and Gran Torino (2008), have all received commercial success and/or critical acclaim. Eastwood's only comedies have been Every Which Way but Loose (1978) and its sequel Any Which Way You Can (1980); despite being widely panned by critics they are the two highest-grossing films of his career after adjusting for inflation.\n\nEastwood has directed most of his own star vehicles, but he has also directed films in which he did not appear such as Mystic River (2003) and Letters from Iwo Jima (2006), for which he received Academy Award nominations and Changeling (2008), which received Golden Globe Award nominations. He has received considerable critical praise in France in particular, including for several of his films which were panned in the United States, and was awarded two of France's highest honors: in 1994 he received the Ordre des Arts et des Lettres medal and in 2007 was awarded the Légion d'honneur medal. In 2000 he was awarded the Italian Venice Film Festival Golden Lion for lifetime achievement.\n\nSince 1967 Eastwood has run his own production company, Malpaso, which has produced the vast majority of his films. He also served as the nonpartisan mayor of Carmel-by-the-Sea, California, from 1986 to 1988. Eastwood has seven children by five women, although he has only married twice. An audiophile, Eastwood is also associated with jazz and has composed and performed pieces in several films along with his eldest son, Kyle Eastwood.\n\nDescription above from the Wikipedia article Clint Eastwood, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/n8h4ZHteFFXfmzUW6OEaPWanDnm.jpg",
    born: "1930-05-31",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Matt Bomer",
    bio:
      "Matthew Staton 'Matt' Bomer (born October 11, 1977) is an American actor. He made his television debut with Guiding Light in 2001, and gained recognition with his recurring role in the NBC television series Chuck. He played the lead role of con-artist and thief Neal Caffrey in the USA Network series White Collar from 2009 to 2014. Bomer won a Golden Globe Award and received a Primetime Emmy Award nomination for his supporting role as Felix Turner, opposite Mark Ruffalo, in the HBO television film The Normal Heart (2014).",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/jvYzsP08M9H76eHu0k1ALdmNnoM.jpg",
    born: "1977-10-11",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "James McAvoy",
    bio:
      "James Andrew McAvoy  (born 21 April 1979) is a Scottish stage and screen actor. His best-known work includes the films The Last King of Scotland and Atonement, both of which earned him BAFTA Award nominations, and the TV series Shameless. McAvoy has won the BAFTA Rising Star Award and a BAFTA Scotland award. He has also been nominated for an ALFS Award, a European Film Award, and a Golden Globe award.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/oPIfGm3mf4lbmO5pWwMvfTt5BM1.jpg",
    born: "1979-04-21",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Ben Stiller",
    bio:
      "​Benjamin Edward 'Ben' Stiller (born November 30, 1965) is an American comedian, actor, writer, film director, and producer. He is the son of veteran comedians and actors Jerry Stiller and Anne Meara. After beginning his acting career with a play, Stiller wrote several mockumentaries, and was offered two of his own shows, both entitled The Ben Stiller Show. He began acting in films, and had his directorial debut with Reality Bites. Throughout his career he has since written, starred in, directed, and/or produced over 50 films including Heavyweights, There's Something About Mary, Meet the Parents, Zoolander, Dodgeball, and Tropic Thunder. In addition, he has had multiple cameos in music videos, television shows, and films. Stiller is a member of the comedic acting brotherhood colloquially known as the Frat Pack. His films have grossed more than $2.1 billion domestically (United States and Canada), with an average of $73 million per film. Throughout his career, he has received several awards and honors including an Emmy Award, several MTV Movie Awards, and a Teen Choice Award.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/o9M2PyoF7QDSMq1OwW0D892fIkV.jpg",
    born: "1965-11-30",
    gender: "Male"
  },
  {
    profession: ["Actor"],
    name: "Alicia Vikander",
    bio:
      "Alicia Amanda Vikander (born 3 October 1988) is a Swedish actress and former dancer. Born and raised in Gothenburg, she began acting as a child in minor stage productions at The Göteborg Opera and trained as a ballet dancer at the Royal Swedish Ballet School in Stockholm and the School of American Ballet in New York. She began her professional acting career by appearing in Swedish short films and television series and first gained recognition in Northern Europe for her role as Josefin Björn-Tegebrandt in the TV drama Andra Avenyn (2008–10).\n\nVikander made her feature film debut in Pure (2010), for which she won the Guldbagge Award for Best Actress. She attracted widespread recognition in 2012 for portraying Princess Ekaterina 'Kitty' Alexandrovna Shcherbatskaya in Joe Wright's film adaptation of Anna Karenina and Queen Caroline Mathilde in the acclaimed Danish film A Royal Affair, receiving a BAFTA Rising Star Award nomination. She went on to star in the 2013 Swedish drama film Hotell and appeared in the Julian Assange-biopic The Fifth Estate that same year.\n\nIn 2014 and 2015, Vikander achieved global recognition and acclaim for her roles as activist Vera Brittain in Testament of Youth, a humanoid robot in Ex Machina (for which she was nominated for the Golden Globe and BAFTA Award for Best Supporting Actress) and painter Gerda Wegener in The Danish Girl, for which she received the Academy Award and the Screen Actors Guild Award for Best Supporting Actress, among other awards.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/drJX0oFv1wQAqFo3lr2ZpLdr2xx.jpg",
    born: "1988-10-03",
    gender: "Female"
  },
  {
    profession: ["Actor", "Producer"],
    name: "François Berléand",
    bio:
      "From Wikipedia, the free encyclopedia.\n\nFrançois Berléand (born April 22, 1952) is a French actor.\n\nBerléand was born in Paris, France of Armenian descent. He plays Gilles Triquet, the officer manager and equivalent of David Brent in Le Bureau, the French version of The Office, produced by Canal+. He released a book about his childhood in 2006, Le fils de l'homme invisible (The son of the invisible man). He also appeared in the 2002 movie The Transporter as the French inspector named Tarconi, an active and honest police officer who is an acquaintance of Frank Martin (Jason Statham). He reprised the role in the sequels Transporter 2 and Transporter 3.\n\nDescription above from the Wikipedia article François Berléand, licensed under CC-BY-SA, full list of contributors on Wikipedia",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/47NVX74FK3KCmGEF7HKmgNhvwMo.jpg",
    born: "1952-04-22",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Donnie Yen",
    bio:
      "From Wikipedia, the free encyclopedia.\n\nDonnie Yen (born 27 July 1963) is a Hong Kong actor, martial artist, film director, action choreographer and film producer. Apart from being a well-known film and television actor in Hong Kong, Yen has also gained international recognition for appearing in many films together with other prominent and internationally-known actors such as Jackie Chan, Jet Li and Michelle Yeoh. He is considered to be Hong Kong's top action star; director Peter Chan mentioned that he 'is the 'it' action person right now' and 'has built himself into a bona fide leading man, who happens to be an action star.'\n\nDescription above from the Wikipedia article Donnie Yen , licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/vlKBbOc0htUsDGvcxeULcFXDMRo.jpg",
    born: "1963-07-27",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Clive Standen",
    bio:
      "​Clive Standen is was born on a British Army base in Holywood, County Down, Northern Ireland, and at the age of two he had moved across the water to Leicestershire in the East Midlands. He went to school at King Edward VII School (Melton Mowbray) followed by a performing arts course at Melton Mowbray College. His first experience of stunts and sword fighting was at the tender age of 12 when Standen got his first job working in a professional stunt team in Nottingham learning to Ride, Joust and sword fight..His sword fighting skills are seamless (he is left-handed but learned to fight with his right hand in his early years making him uniquely ambidextrous in the craft). at the age of fifteen Clive was both a member of the National Youth Theatre and the National Youth Music Theatre performing lead roles in plays and musicals in West End and at venues such as The Royal Albert Hall and Shakespeare's Globe Theatre. He then won a place at the London Academy of Dramatic Art LAMDA on their three year acting course. Prior to his role in Robin Hood and Dr Who, Standen appeared in Waking the dead, in 2004, the Second World War drama documentary Ten days to D-day, three episodes of Doctors and Tom Brown's Schooldays, the acclaimed ITV adaptation of the book by Thomas Hughes. He also played the lead role of Major Alan Marshall in the Zero Hour TV dramatization of the SAS mission in Sierra Leone known as operation Barras. Standen took a lead role in the mainstream Bollywood film Namastey London alongside Katrina Kaif and Akshay Kumar. Clive is also the face of Evian water 2008. Away from acting, in his late teens Standen was a former international Muay Thai Boxer and later Fencing gold medalist. He married his wife Francesca in 2007 at Babington House. They live in London with their three children, Hayden, Edi and Rafferty.\n\nHi is best known for playing the battle hardened warrior 'Gawain' a series regular in the Starz networks TV series 'Camelot' and also 'Archer', the swashbuckling brother of Robin Hood in the BBC TV series Robin Hood; a role which brought Standen much critical acclaim with many of the national press comparing Standen's charming but edgy performance and seemingly effortless sword fighting Skill to Errol Flynn. It was much speculated at the end of the 3rd season that after his brothers death 'Archer' would pick up the mantle of Robin Hood and become the shows new hero. Clive is also known for a previous recurring role as Private Harris in the British sci-fi show Doctor Who.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/euJCWcex56bTA9TZ9qrOtVVd1gV.jpg",
    born: "1981-07-22",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Zac Efron",
    bio:
      "Zachary David Alexander 'Zac' Efron (born October 18, 1987) is an American actor, singer, and dancer. He began acting professionally in the early 2000s, and became known to young audiences after his roles in the Disney Channel Original Movie High School Musical, the WB series Summerland, and the 2007 film version of the Broadway musical Hairspray. In 2007, before the release of High School Musical 2, Rolling Stone declared him the 'poster boy for tweenyboppers' and featured him in their late August 2007 issue. Efron has since starred in the films 17 Again, Me and Orson Welles, and Charlie St. Cloud, and is due to star in New Year's Eve and The Lucky One.\n\nDescription above from the Wikipedia article Zac Efron, licensed under CC-BY-SA, full list of contributors on Wikipedia​",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/6oXNHv7gAyXXYFpF943pKRsTtqQ.jpg",
    born: "1987-10-18",
    gender: "Male"
  },
  {
    profession: ["Actor"],
    name: "Jennifer Jason Leigh",
    bio:
      "Jennifer Jason Leigh (born February 5, 1962) is an American film and stage actress, best known for her roles in Fast Times at Ridgemont High, Single White Female, Last Exit to Brooklyn, Georgia and Short Cuts. She is also the co-writer and co-director of the film The Anniversary Party, made with fellow actor Alan Cumming.\n\nLeigh is known for her emotionally raw and often sexually explicit portrayals of vulnerable and damaged women, and for her intensive method inspired research into her roles.\n\nDescription above from the Wikipedia article Jennifer Jason Leigh, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/tncFH9YfrK2ql1cNXGEkEAJ5zIz.jpg",
    born: "1962-02-05",
    gender: "Female"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Will Smith",
    bio:
      "Willard Christopher 'Will' Smith, Jr. (born September 25, 1968) is an American actor, film producer and pop rapper. He has enjoyed success in music, television and film. In April 2007, Newsweek called him the most powerful actor on the planet. Smith has been nominated for four Golden Globe Awards, two Academy Awards, and has won multiple Grammy Awards.\n\nIn the late 1980s, Smith achieved modest fame as a rapper under the name The Fresh Prince. In 1990, his popularity increased dramatically when he starred in the popular television series The Fresh Prince of Bel-Air. The show ran for nearly six years (1990–1996) on NBC and has been syndicated consistently on various networks since then.\n\nIn the mid-1990s, Smith transitioned from television to film, and ultimately starred in numerous blockbuster films that received broad box office success. In fact, he is the only actor in history to have eight consecutive films gross over $100 million in the domestic box office as well as being the only actor to have eight consecutive films in which he starred open at the #1 spot in the domestic box office tally. Fourteen of the 19 fiction films he has acted in have accumulated worldwide gross earnings of over $100 million, and 4 of them took in over $500 million in global box office receipts. His most financially successful films have been Bad Boys, Bad Boys II, Independence Day, Men in Black, Men in Black II, I, Robot, The Pursuit of Happyness, I Am Legend, Hancock, Wild Wild West, Enemy of the State, Shark Tale, Hitch, and Seven Pounds. He also earned critical praise for his performances in Six Degrees of Separation, Ali, and The Pursuit of Happyness, receiving Best Actor Oscar nominations for the latter two. From Wikipedia, the free encyclopedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/5V4OKHQpIEffF9rqgzGYK4TNaGg.jpg",
    born: "1968-09-25",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Tom Hiddleston",
    bio:
      "Thomas William 'Tom' Hiddleston (born 9 February 1981) is an English actor. He is perhaps best known for playing Loki in the 2011 action movie Thor.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/qB1lHPFBPIzw6I7EvsciZ5wyUNS.jpg",
    born: "1981-02-09",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Kim Yoo-Yeon",
    bio: "",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/v6Kz62B8Tvfe7HQcjWKvFGUM7qZ.jpg",
    gender: "Male"
  },
  {
    profession: ["Actor"],
    name: "Blake Lively",
    bio:
      "Blake Lively (born August 25, 1987) is an American actress, model, and celebrity homemaker. She starred as Serena van der Woodsen in the CW drama Gossip Girl (2007–12), and has co-starred in such films as The Sisterhood of the Traveling Pants (2005), Accepted (2006), The Private Lives of Pippa Lee (2009), The Town (2010), Green Lantern (2011), Savages (2012) and The Age of Adaline (2015).\n\nDescription above from the Wikipedia article Blake Lively, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/3ac8khocFw9Hc87vuNW9RvVq4yc.jpg",
    born: "1987-08-25",
    gender: "Female"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Søren Pilmark",
    bio:
      "Søren Pilmark was born on October 16, 1955 in Copenhagen, Denmark as Søren Louis Pilmark. He is an actor and writer, known for Flickering Lights (2000), King's Game (2004) and The Keeper of Lost Causes (2013).",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/7yDdMrIwuCbyGVG7iCIFQPXmbif.jpg",
    born: "1955-10-16",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Patrick Stewart",
    bio:
      "Sir Patrick Hewes Stewart is an English film, television and stage actor. He has had a distinguished career in theatre and television for around half a century. He is most widely known for his television and film roles, as Captain Jean-Luc Picard in Star Trek: The Next Generation and as Professor Charles Xavier in the X-Men films.\n\nStewart was born in Mirfield near Dewsbury in the West Riding of Yorkshire, England, the son of Gladys, a weaver and textile worker, and Alfred Stewart, a Regimental Sergeant Major in the British Army who served with the King's Own Yorkshire Light Infantry and previously worked as a general labourer and as a postman. Stewart and his first wife, Sheila Falconer, have two children: Daniel Freedom and Sophie Alexandra. Stewart and Falconer divorced in 1990. In 1997, he became engaged to Wendy Neuss, one of the producers of Star Trek: The Next Generation, and they married on 25 August 2000, divorcing three years later. Four months prior to his divorce from Neuss, Stewart played opposite actress Lisa Dillon in a production of The Master Builder. The two dated for four years, but are no longer together. He is now seeing Sunny Ozell; at 31, she is younger than his daughter. 'I just don't meet women of my age,' he explains.\n\nStewart has been a prolific actor in performances by the Royal Shakespeare Company, appearing in over 60 productions.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/wEy5qSDT5jT3ZASc2hbwi59voPL.jpg",
    born: "1940-07-13",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Josh Brolin",
    bio:
      "Josh James Brolin (born February 12, 1968) is an American actor. He has acted in theater, film and television roles since 1985, and won acting awards for his roles in the films W., No Country for Old Men, Milk and Wall Street: Money Never Sleeps. He appeared in True Grit, a 2010 western film adaptation of the 1968 novel by Charles Portis.\n\nDescription above from the Wikipedia article Josh Brolin, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/x8KKnvHyPvH16M6waAnY1OeCtA8.jpg",
    born: "1968-02-12",
    gender: "Male"
  },
  {
    profession: ["Actor"],
    name: "Mila Kunis",
    bio:
      "Milena 'Mila' Kunis (born August 14, 1983) is an American actress. Her television work includes the role of Jackie Burkhart on That '70s Show and the voice of Meg Griffin on the animated series Family Guy. She has also played roles in film, such as Rachel Jansen in Forgetting Sarah Marshall, Mona Sax in Max Payne and Solara in The Book of Eli.\n\nIn 2010, she won the Marcello Mastroianni Award for Best Young Actor or Actress at the 67th Venice International Film Festival for her performance as Lily in Black Swan. She was also nominated for a Golden Globe Award for Best Supporting Actress and a Screen Actors Guild Award for Outstanding Performance by a Female Actor in a Supporting Role for the same role.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/6Lp9qPkMO740Hcp8NBYZZLWWvJF.jpg",
    born: "1983-08-14",
    gender: "Female"
  },
  {
    profession: ["Actor", "Producer"],
    name: "James Franco",
    bio:
      "James Edward Franco (born April 19, 1978) is an American actor. He left college in order to pursue acting and started off his career by making guest appearances on television series in the 1990s. Franco landed a lead part on the short-lived cult hit television program Freaks and Geeks and later achieved recognition for playing the titular character in the TV biopic James Dean (2001), for which he was awarded a Golden Globe Award. He achieved international fame with his portrayals of Harry Osborn in Sam Raimi's Spider-Man trilogy.\n\nFranco has appeared in an eclectic range of projects since the 2000s. Ranging from period to contemporary pieces, and from major Hollywood productions to less publicized indie films, as well as fantasy movies to biopics and soap operas. Other notable films include Pineapple Express, a stoner comedy that earned him his second Golden Globes nomination, the Harvey Milk-biopic Milk (both 2008) as well as Danny Boyle's 2010 movie 127 Hours, about real-life mountain climber Aron Ralston's struggle to free his hand from a boulder. His performance in 127 Hours earned him nominations for many high-profile awards, including the Academy Awards, Golden Globe and SAG Awards (None of which he won)\n\nFranco has hosted the skit comedy Saturday Night Live twice as well as the 83rd Academy Awards with Anne Hathaway. He volunteers for the Art of Elysium charity and is in a relationship with actress Ahna O'Reilly.\n\nDescription above from the Wikipedia article James Franco, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/m9he3UnbmAAxkV1XH2EmzkNfkaS.jpg",
    born: "1978-04-19",
    gender: "Male"
  },
  {
    profession: ["Actor"],
    name: "Jennifer Connelly",
    bio:
      "Jennifer Lynn Connelly (born December 12, 1970), is an American film actress and former child model who started modeling after a friend of her parents suggested an audition.\n\nShe subsequently appeared in magazine, newspaper and television advertising. Connelly made her motion picture debut in the 1984 crime film Once Upon a Time in America, then, while continuing her career as a model, starred as a teenager in films such as Labyrinth and Career Opportunities. She gained critical acclaim following her work in the 1998 science fiction film Dark City and for her portrayal of Marion Silver in Darren Aronofsky's 2000 drama, Requiem for a Dream. In 2002, Connelly won an Academy Award for Best Supporting Actress along with many other awards for her role as Alicia Nash in Ron Howard's 2001 biopic A Beautiful Mind. Other film credits include the 2003 Marvel superhero film Hulk, the 2005 thriller Dark Water, the drama Blood Diamond, the remake of The Day the Earth Stood Still and the romantic comedy He's Just Not That Into You. Since 2005, Connelly has served as the Amnesty International Ambassador for Human Rights Education for the United States. Magazines, including Time, Vanity Fair, Esquire, and the Los Angeles Times, have included her on their lists of the world's most beautiful women.\n\nDescription above from the Wikipedia article Jennifer Connelly, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/xTpRRy9hwk4E2uypuQ30iqt2W2W.jpg",
    born: "1970-12-12",
    gender: "Female"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Matt Damon",
    bio:
      "Matthew Paige 'Matt' Damon (born October 8, 1970) is an American actor, screenwriter, and philanthropist.\n\nHis career launched following the success of the film Good Will Hunting (1997) from a screenplay he co-wrote with friend Ben Affleck. The pair won an Academy Award for Best Original Screenplay and a Golden Globe Award for Best Screenplay for their work. Damon alone received multiple Best Actor nominations, including an Academy Award nomination for his lead performance in the film. Damon has since starred in commercially successful films such as Saving Private Ryan (1998), the Ocean's trilogy, and the first three films in the Bourne series, while also gaining critical acclaim for his performances in dramas such as Syriana (2005), The Good Shepherd (2006), and The Departed (2006). He garnered a Golden Globe nomination for portraying the title character in The Talented Mr. Ripley (1999) and was nominated for an Academy Award for Best Supporting Actor in Invictus (2009).\n\nHe is one of the top 40 highest grossing actors of all time. In 2007, Damon received a star on the Hollywood Walk of Fame and was named Sexiest Man Alive by People magazine. Damon has been actively involved in charitable work, including the ONE Campaign, H2O Africa Foundation, and Water.org.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/elSlNgV8xVifsbHpFsqrPGxJToZ.jpg",
    born: "1970-10-08",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Cole Sprouse",
    bio:
      "From Wikipedia, the free encyclopedia.\n\nDylan Thomas Sprouse and Cole Mitchell Sprouse (born August 4, 1992) are American actors. They are twins and are collectively referred to as Dylan and Cole Sprouse or the Sprouse Bros. Their first prominent major theatrical film role was in Big Daddy, where they starred alongside Adam Sandler. They later appeared in several television sitcoms and starred in the straight-to-DVD family films, I Saw Mommy Kissing Santa Claus and Just for Kicks.\n\nIn 2005, they starred in the Disney Channel sitcom The Suite Life of Zack & Cody. As a result of the series' success, they have become 'heartthrobs' and 'overwhelming draws' among pre-teen and teen audiences. In 2006, the brothers launched a franchise known as the 'Sprouse Bros' brand, which included a clothing line, book series and magazine. The majority of the Sprouses' franchise ended in 2008, except for their clothing line. They have been subsequently described as 'arguably the two best-known child stars in recent years' by the media and were two of the wealthiest children alive in 2007. In 2008, they began starring in The Suite Life on Deck, the sequel to The Suite Life of Zack & Cody. The Suite Life on Deck went on to become the most-watched tween/children's television show in 2008 and 2009. In 2010, the Sprouse brothers were the highest paid teenage Disney television actors, earning $40,000 per episode combined.The show ended in May 2011. They began cultivating an adult image by starring in the independent theatrical suspense film, The Kings of Appletown in 2009. MSN reported by the end of the 2000s, the twin brothers became the richest teenage twins in the world.\n\nDescription above from the Wikipedia article Dylan and Cole Sprouse, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/aJxTvZjse8hAljcvljqTaH45eaB.jpg",
    born: "1992-08-04",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Matthew McConaughey",
    bio:
      "Matthew David McConaughey (born November 4, 1969) is an American actor. After a series of minor roles in the early 1990s, McConaughey gained notice for his breakout role in Dazed and Confused (1993). It was in this role that he first conceived the idea of his catch-phrase 'Well alright, alright.' He then appeared in films such as A Time to Kill, Contact, U-571, Tiptoes, Sahara, and We Are Marshall. McConaughey is best known more recently for his performances as a leading man in the romantic comedies The Wedding Planner, How to Lose a Guy in 10 Days, Failure to Launch, Ghosts of Girlfriends Past and Fool's Gold.\n\nDescription above from the Wikipedia article Matthew McConaughey, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/jdRmHrG0TWXGhs4tO6TJNSoL25T.jpg",
    born: "1969-11-04",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Daniel Craig",
    bio:
      "Daniel Wroughton Craig is an English actor, best known for playing British secret agent James Bond since 2006. Craig is an alumnus of the National Youth Theatre and graduated from the Guildhall School of Music and Drama in London and began his career on stage. His early on screen appearances were in the films Elizabeth, The Power of One and A Kid in King Arthur's Court, and on Sharpe's Eagle and Zorro in television. His appearances in the British films Love Is the Devil, The Trench and Some Voices attracted the industry's attention, leading to roles in bigger productions such as Lara Croft: Tomb Raider, Road to Perdition, Layer Cake and Munich.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/mr6cdu6lLRscfFUv8onVWZqaRdZ.jpg",
    born: "1968-03-02",
    gender: "Male"
  },
  {
    profession: ["Actor"],
    name: "Lisa Kudrow",
    bio:
      "Lisa Valerie Kudrow-Stern is an American actress, best known for her role as Phoebe Buffay in the television sitcom Friends, for which she received many accolades including an Emmy Award and two Screen Actors Guild Awards.\n\nWhile starring in Friends, Kudrow also appeared in 1999's comedy film Analyze This, directed by Harold Ramis, as well as its 2002 sequel Analyze That. Kudrow has also appeared in several comedy films, notably playing Michele Weinberger in Romy and Michele's High School Reunion, and after Friends had ended, Kudrow featured in the 2009 feature film Bandslam as the character Karen Burton. She has also appeared in the comedies P.S. I Love You and Hotel For Dogs.\n\nOn May 27, 1995, Kudrow became the first 'Friend' to marry when she wed Michel Stern, a French advertising executive. They have one son, Julian Murray (born May 7, 1998), and live near Beverly Hills, California.  Kudrow's pregnancy was written into Friends with her character Phoebe having triplets as a surrogate parent for her brother and his wife because they were not able to have children. Description above from the Wikipedia article Lisa Kudrow, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/9c7WB5dqsA3zpZvh6CKRQ6xupjw.jpg",
    born: "1963-07-30",
    gender: "Female"
  },
  {
    profession: ["Actor"],
    name: "Rachel Weisz",
    bio:
      "Rachel Hannah Weisz (born 7 March 1970) is an English film and theatre actress and fashion model. She started her acting career at Trinity Hall, Cambridge University, where she co-founded the theatrical group Cambridge Talking Tongues. The group was awarded the Student Drama Award for the improvised piece Slight Possession during the Edinburgh Festival Fringe by The Guardian.\n\nWeisz started working in television, appearing in Inspector Morse, the British miniseries The Scarlet and the Black, and the television movie Advocates II. She made her film debut in the 1994 film Death Machine, but her breakthrough role came in the 1996 movie Chain reaction, leading to a high-profile role as Evelyn Carnahan-O'Connell in the films The Mummy, in 1999, and The Mummy Returns in 2001. Other notable films featuring Weisz are Enemy at the Gates, About a Boy, Constantine, The Fountain and The Constant Gardener, for which she received the Academy Award for Best Supporting Actress, the Golden Globe Award for Best Supporting Actress and the Screen Actors Guild Award for Outstanding Performance by a Female Actor in a Supporting Role.\n\nWeisz also worked on theatre. Her stage breakthrough was the 1994 revival of Noel Coward's play Design for Living, which earned her the 'London Critics' Circle Award for the most promising newcomer. Weisz's performances also include the 1999 Donmar Warehouse production of Tennessee Williams' Suddenly Last Summer, and the 2006 revival of A Streetcar Named Desire. Her portrayal of Blanche DuBois in the latter play earned her the Critics' Circle Theatre Award for Best Actress of 2009.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/3QbFXeiUzXUVUrJ7fdiCn7A7ReW.jpg",
    born: "1970-03-07",
    gender: "Female"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Clancy Brown",
    bio:
      "Clarence J. 'Clancy' Brown III (born January 5, 1959 height 6' 3½' (1,92 m)) is an American film, television and voice actor. He is known for his live-action roles as Captain Byron Hadley in the award-winning The Shawshank Redemption; The Kurgan in the film Highlander; Brother Justin Crowe in HBO's critically acclaimed Carnivàle and Career Sergeant Zim in Starship Troopers. Brown is most famous for providing the voices of animated characters such as Mr. Eugene H. Krabs in the animated series SpongeBob SquarePants; Lex Luthor throughout various DC projects; Captain Black and Ratso in Jackie Chan Adventures; Otto in Super Robot Monkey Team Hyperforce Go!; Dr. Neo Cortex in the original Crash Bandicoot video games and Savage Opress in Star Wars: The Clone Wars. Early life\n\nBrown was born in Urbana, Ohio in 1959 and had an older sister Beth (1958–1965). Their mother Joyce (née Eldridge) was a conductor, composer, and concert pianist. Their father Clarence J. 'Bud' Brown, Jr. helped manage the Brown Publishing Company, the family-owned newspaper business started by Clancy's grandfather, Congressman Clarence J. Brown. From 1965 to 1983 Bud Brown also served as a US Congressman, and later as chairman of the board of Brown Publishing. The family operated the business until 2010.Brown graduated from St. Albans School in Washington, D.C., as his family lived there much of the time when his father served in Congress. He earned a scholarship to Northwestern University, where he became a member of the Sigma Chi Fraternity.\n\nBrown is often cast in roles of villains or authority figures. His career has tended to alternate among mainstream TV/cable; major-studio and independent-studio movies; and a large repertoire of voice work for animated and video game roles.\n\nPersonal life\n\nBrown has been married to Jeanne Johnson since 1993; they have a son and daughter.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/xBVifBW0riMSbedEQ27hObjPqVw.jpg",
    born: "1959-01-05",
    gender: "Male"
  },
  {
    profession: ["Actor"],
    name: "Audrey Tautou",
    bio:
      "Audrey Justine Tautou (French pronunciation: [o.dʁɛ to.tu]; born 9 August 1976) is a French actress and model. Signed by an agent at age 17, she made her acting debut at 18 on television and her feature film debut the following year in Venus Beauty Institute (1999), for which she received critical acclaim and won the César Award for Most Promising Actress. Her subsequent roles in the 1990s and 2000s included Le Libertin and Happenstance (2000).\n\nTautou achieved international recognition for her lead role in the 2001 film Amélie, which met with critical acclaim and was a major box-office success. Amélie won Best Film at the European Film Awards, four César Awards (including Best Film and Best Director), two BAFTA Awards (including Best Original Screenplay), and was nominated for five Academy Awards.\n\nTautou has since appeared in films in a range of genres, including the thrillers Dirty Pretty Things and The Da Vinci Code, and the romantic Priceless (2006). She has received critical acclaim for her many roles including the drama A Very Long Engagement (2004) and the biographical drama Coco avant Chanel (2009). She has been nominated three times for the César Award and twice for the BAFTA for Best Actress in a leading role. She became one of the few French actors in history to be invited to join the Academy of Motion Picture Arts and Sciences (AMPAS) in June 2004.\n\nTautou has modeled for Chanel, Montblanc, L'Oréal and many other companies. She is an active supporter of several charities.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/pKfmpmZgH2LDPK4l1GbtnCWTukf.jpg",
    born: "1976-08-09",
    gender: "Female"
  },
  {
    profession: ["Actor"],
    name: "Lucy Liu",
    bio:
      "Lucy Alexis Liu (born Lucy Liu; December 2, 1968) is an American actress, voice actress, director, producer, singer and artist. She became known for playing the role of the vicious and ill-mannered Ling Woo in the television series Ally McBeal (1998–2002), for which she was nominated for a Primetime Emmy Award for Outstanding Supporting Actress in a Comedy Series and a Screen Actors Guild Award for Outstanding Performance by a Female Actor in a Comedy Series. Liu's film work includes starring as one of the heroines in Charlie's Angels (2000), portraying O-Ren Ishii in Kill Bill (2003), and starring roles in the main casts of Payback (1999), Chicago (2002), and the animated film series Kung Fu Panda (2008–present) portraying the character Master Viper.\n\nIn 2008, she starred in an ABC comedy-drama, Cashmere Mafia, which ended after one abbreviated season. The show was one of only a few American television shows to have an Asian American series lead. In 2012, Liu joined the cast of the TNT series Southland in the recurring role of Jessica Tang, for which she won the Critics' Choice Television Award for Best Drama Guest Actress. She is currently co-starring in the Sherlock Holmes–inspired crime drama series Elementary as Joan Watson for which she won the Seoul International Drama Award for Best Actress, and voicing Silvermist in Disney's Tinker Bell film series.\n\nDescription above from the Wikipedia article Lucy Liu, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/9nbtjqsx3De7hO2XDtrBQ7M9VCH.jpg",
    born: "1968-12-02",
    gender: "Female"
  },
  {
    profession: ["Actor"],
    name: "Maria Bello",
    bio:
      "Maria Elena Bello (born April 18, 1967)  is an American actress and singer. Started her acting career in small off-Broadway plays, such as 'The Killer Inside Me', 'Small Town Gals with Big Problems' and 'Urban Planning'.  Bello’s big break came when producers Kerry Lenhart and John J. Sakmar cast her as Mrs. Smith in the spy show “Mr. &amp; Mrs. Smith”.\n\nShe is best known for her appearances in the movies “Coyote Ugly”, “The Jane Austen Book Club”, “Thank You for Smoking”, ”A History of Violence”, and “The Mummy: Tomb of the Dragon Emperor”.  For television she is best known for her role as Dr. Anna Del Amico on the NBC medical drama ER. Bello has a son named Jackson Blue (born 2001) with former long-time boyfriend Dan McDermott. In July 2008, she became engaged to musician Bryn Mooser; As of 2010 Maria Bello and Bryn Mooser are no longer together.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/tFkbad0JoWvYc6XYBITv6EfeLwR.jpg",
    born: "1967-04-18",
    gender: "Female"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Dave Weasel",
    bio: "",
    imageUrl: "https://image.tmdb.org/t/p/w235_and_h235_facenull",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Chris Evans",
    bio:
      "Christopher Robert 'Chris' Evans (born June 13, 1981) is an American actor and filmmaker. Evans is best known for his superhero roles, as Captain America in the Marvel Cinematic Universe, and as Human Torch in Fantastic Four. In 2015, he made his directorial debut with the romantic drama Before We Go.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/8CgFKCZJVwZxa1F88n8drEux0vT.jpg",
    born: "1981-06-13",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Sylvester Stallone",
    bio:
      "Sylvester Stallone Gardenzio, nicknamed Sly, (New York, July 6, 1946), is an actor, screenwriter, director, film producer and American entrepreneur.\n\nHe is best known for the interpretation of the two famous characters Rocky Balboa and John Rambo, both protagonists of two long film sagas started with the film Rocky (1976) and Blood (1982).",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/gnmwOa46C2TP35N7ARSzboTdx2u.jpg",
    born: "1946-07-06",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Jared Leto",
    bio:
      "Jared Joseph Leto (born December 26, 1971) is an American actor and musician. He began his career as a model before studying art, and then later, film and video. Leto gained fame during his role as Jordan Catalano in My So-Called Life. He has appeared in films such as Fight Club; Girl, Interrupted; Panic Room; American Psycho; Alexander; Requiem for a Dream; Lord of War, Prefontaine, Mr. Nobody and Suicide Squad. He is the lead vocalist, rhythm guitarist and main songwriter for the American rock band 30 Seconds to Mars and has directed music videos under the pseudonym Bartholomew Cubbins.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/msugySeTCyCmlRWtyB6sMixTQYY.jpg",
    born: "1971-12-26",
    gender: "Male"
  },
  {
    profession: ["Actor"],
    name: "Emily Blunt",
    bio:
      "Emily Olivia Leah Blunt (born 23 February 1983) is a British-American film and stage actress. Her first major film role was in the British production My Summer of Love (2004). After which she appeared in numerous American and British movies.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/w5bjRgGy3vNkJqY97kbvTp7ldxb.jpg",
    born: "1983-02-23",
    gender: "Female"
  },
  {
    profession: ["Actor"],
    name: "Monica Bellucci",
    bio:
      "Monica Bellucci (born September 30, 1964) is an Italian actress and fashion model. Bellucci began her career as a model and made a transition to Italian films. She played the role of Persephone in the 2003 science-fiction films The Matrix Reloaded and The Matrix Revolutions, Mary Magdalene in the 2004 biblical drama The Passion of the Christ, and Alex in the controversial art film Irreversible. Bellucci was a Bond girl in the 2015 James Bond film Spectre, making her the oldest Bond girl in the franchise.\n\nDescription above from the Wikipedia article Monica Bellucci, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/nkrIGojQy6FNn9s5cfpiUAmLeNz.jpg",
    born: "1964-09-30",
    gender: "Female"
  },
  {
    profession: ["Actor"],
    name: "Michelle Pfeiffer",
    bio:
      "Michelle Marie Pfeiffer  (born April 29, 1958) is an American actress and singer. She made her screen debut in 1980, but first garnered mainstream attention with her performance in Scarface (1983). She rose to prominence in the late 1980s and early 1990s with critically acclaimed performances in the films Dangerous Liaisons (1988), Married to the Mob (1988), The Fabulous Baker Boys (1989), The Russia House (1990), Frankie and Johnny (1991), Love Field (1992), Batman Returns (1992), and The Age of Innocence (1993). Michelle Pfeiffer has won numerous awards for her work, including the Golden Globe Award for Best Actress - Motion Picture Drama for The Fabulous Baker Boys, the BAFTA Award for Best Actress in a Supporting Role for Dangerous Liaisons, and the Silver Bear for Best Actress for Love Field; each of these films also resulted in a nomination for an Academy Award. She received a star on the Hollywood Walk of Fame on August 6, 2007. Her star is located at 6801 Hollywood Boulevard.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/nhfGgJMRJvAxIEm1JJM7DOYutwy.jpg",
    born: "1958-04-29",
    gender: "Female"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Ridley Scott",
    bio:
      "Scott was born in South Shields, Tyne and Wear, England, the son of Elizabeth and Colonel Francis Percy Scott. He was raised in an Army family, meaning that for most of his early life, his father — an officer in the Royal Engineers — was absent. Ridley's older brother, Frank, joined the Merchant Navy when he was still young and the pair had little contact. During this time the family moved around, living in (among other areas) Cumbria, Wales and Germany. He has a younger brother, Tony, also a film director. After the Second World War, the Scott family moved back to their native north-east England, eventually settling in Teesside (whose industrial landscape would later inspire similar scenes in Blade Runner). He enjoyed watching films, and his favourites include Lawrence of Arabia, Citizen Kane and Seven Samurai. Scott studied in Teesside from 1954 to 1958, at Grangefield Grammar School and later in West Hartlepool College of Art, graduating with a Diploma in Design. He progressed to an M.A. in graphic design at the Royal College of Art from 1960 to 1962.\n\nAt the RCA he contributed to the college magazine, ARK and helped to establish its film department. For his final show, he made a black and white short film, Boy and Bicycle, starring his younger brother, Tony Scott, and his father. The film's main visual elements would become features of Scott's later work; it was issued on the 'Extras' section of The Duellists DVD. After graduation in 1963, he secured a job as a trainee set designer with the BBC, leading to work on the popular television police series Z-Cars and the science fiction series Out of the Unknown. Scott was an admirer of Stanley Kubrick early in his development as a director. For his entry to the BBC traineeship, Scott remade Paths of Glory as a short film.\n\nHe was assigned to design the second Doctor Who serial, The Daleks, which would have entailed realising the famous alien creatures. However, shortly before Scott was due to start work, a schedule conflict meant that he was replaced on the serial by Raymond Cusick.\n\nAt the BBC, Scott was placed into a director training programme and, before he left the corporation, had directed episodes of Z-Cars, its spin-off, Softly, Softly, and adventure series Adam Adamant Lives!\n\nIn 1968, Ridley and Tony Scott founded Ridley Scott Associates (RSA), a film and commercial production company.Five members of the Scott family are directors, all working for RSA. Brother Tony has been a successful film director for more than two decades; sons, Jake and Luke are both acclaimed commercials directors as is his daughter, Jordan Scott. Jake and Jordan both work from Los Angeles and Luke is based in London.\n\nIn 1995, Shepperton Studios was purchased by a consortium headed by Ridley and Tony Scott, which extensively renovated the studios while also expanding and improving its grounds.  ",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/oTAL0z0vsjipCruxXUsDUIieuhk.jpg",
    born: "1937-11-30",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Pavle Vuisić",
    bio: "",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/tmhZVV4xkNrHkb0HAXOsADaMgw.jpg",
    born: "1926-07-10",
    gender: "Male"
  },
  {
    profession: ["Actor"],
    name: "Tuba Buyukustun",
    bio:
      "She studied costume design and set decoration at Mimar Sinan University. While studying, she started getting involved in commercials before turning to television and films. Her hobbies include painting, horse riding, sculpting, driving cars and skiing. She married Onur Saylak, who was her co-star from Asi and Gönülcelen, in Paris. She is the mother of twins named Toprak and Maya.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/qVQKLx2qcKWO1RsrPeZKtBPapel.jpg",
    born: "1982-07-05",
    gender: "Female"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Scott Adkins",
    bio:
      "From Wikipedia, the free encyclopedia.\n\nScott Adkins (born June 17, 1976) is an English actor and martial artist who is perhaps best known for playing Boyka in Undisputed II: Last Man Standing and Undisputed III: Redemption and Bradley Hume in Holby City and Ed Russell in Mile High. Adkins has also appeared in Dangerfield, Hollyoaks, The Tournament and many other TV series as well as many films.\n\nDescription above from the Wikipedia article Scott Adkins, licensed under CC-BY-SA, full list of contributors on Wikipedia",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/mX5vlgiyJ8XdvBUMlFe6FVQ9YDh.jpg",
    born: "1976-06-17",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Shia LaBeouf",
    bio:
      "Shia Saide LaBeouf is an American actor, voice actor, and comedian. LaBeouf began his comedy career when he was 10 years old, and then launched his acting career in 1998 at the age of 12. He became known among younger audiences for his part in the Disney Channel series Even Stevens, also appearing in three Disney TV movies. In 2003, LaBeouf made his theatrical film debut in Holes, also appearing in the lead role in The Battle of Shaker Heights that same year.\n\nIn 2005, LaBeouf made his transition into more mature roles with The Greatest Game Ever Played. In 2007, he starred as the leads in Disturbia and Transformers, and the following year he appeared in Indiana Jones and the Kingdom of the Crystal Skull as Indiana's son. In 2009, LaBeouf reprised his role as Sam Witwicky in the Transformers sequel Transformers: Revenge of the Fallen, and appeared in New York, I Love You. His upcoming films include the lead roles in Wall Street: Money Never Sleeps, Transformers 3 and The Associate. In 2004, he made his directorial debut by directing 'Lets Love Hate' with Lorenzo Eduardo. Five years later he also directed Cage's music video for the single 'I Never Knew You'. LaBeouf has been in one long-term relationship, which began in 2004 and lasted three years. He is currently in a relationship with Carey Mulligan; the two began dating in the summer of 2009. In November 2007, LaBeouf was arrested for misdemeanor criminal trespassing in a Chicago Walgreens after refusing to leave; the criminal charges were dropped the following month. In July 2008, LaBeouf was involved in a car accident, which was caused by the other driver. LaBeouf was arrested at the scene of the car accident for misdemeanor drunk driving, and his driver's license was suspended for one year because he refused a breathalyzer examination. As a result of the injuries he sustained from the accident, he has undergone multiple surgeries on his left hand, which has permanent damage and scarring.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/1cEoclLc6cXfvDTsj00fUaY2zQz.jpg",
    born: "1986-06-11",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Paul Walker",
    bio:
      "Paul William Walker IV (September 12, 1973 – November 30, 2013) was an American actor. He became well known in 1999 after his role in the hit film Varsity Blues. However, he was perhaps best known for starring as Brian O'Conner in The Fast and the Furious film series. His other films include Eight Below, Into the Blue, She's All That and Takers.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/iqvYezRoEY5k8wnlfHriHQfl5dX.jpg",
    born: "1973-09-12",
    gender: "Male"
  },
  {
    profession: ["Actor"],
    name: "Shailene Woodley",
    bio:
      "Shailene Diann Woodley (born November 15, 1991) is an American actress. Her first major role was as the main character, Amy Juergens, in the ABC Family series The Secret Life of the American Teenager (2008–13). She then appeared in the independent American drama The Descendants (2011), for which she received the Independent Spirit Award for Best Supporting Actress and a Golden Globe nomination for Best Supporting Actress – Motion Picture, and The Spectacular Now (2013), receiving the Special Jury Award for Acting at the 2013 Sundance Film Festival and an Independent Spirit Award nomination for Best Female Lead.\n\nWoodley gained commercial success when cast as the main protagonist, Beatrice 'Tris' Prior, in The Divergent Series, and as Hazel Grace Lancaster in The Fault in Our Stars (2014).\n\nDescription above from the Wikipedia article Shailene Woodley, licensed under CC-BY-SA, full list of contributors on Wikipedia",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/kkLbiTlBGNwJL9qHuVHeqCMNrEx.jpg",
    born: "1991-11-15",
    gender: "Female"
  },
  {
    profession: ["Actor"],
    name: "Penélope Cruz",
    bio:
      "Penélope Cruz Sánchez is a Spanish actress and model, signed at age 15, made her acting debut at 16 on television and her feature film debut the following year in Jamón, jamón (1992), to critical acclaim.  Cruz achieved recognition for her lead roles in the 2001 films Vanilla Sky and Blow.\n\nShe has since built a successful career, appearing in films from a range of genres, from thrillers to family friendly holiday features. She has received critical acclaim for her roles in Volver (2006) and Nine (2009) receiving Golden Globe and Academy Award nominations for each. She won the Academy Award for Best Supporting Actress in 2008 for Vicky Cristina Barcelona (2008). She was the first Spanish actress in history to receive an Academy Award and the first Spanish actress to receive a star at the Hollywood Walk of Fame.\n\nCruz has modeled for companies such as Mango, Ralph Lauren and L'Oréal. Penélope and her younger sister Mónica Cruz have designed items for Mango.  Cruz has volunteered in Uganda and India; she donated her salary from The Hi-Lo Country to help fund the late nun's mission. A wax sculpture of Cruz will be placed in a premier spot in the Grevin Wax Museum in Paris.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/dcPSUfxMa791NZvrFiBc3ReDdpU.jpg",
    born: "1974-04-28",
    gender: "Female"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Jackie Chan",
    bio:
      "Jackie Chan, born Chan Kong-sang, is a Hong Kong actor, action choreographer, filmmaker, comedian, producer, martial artist, screenwriter, entrepreneur, singer and stunt performer. In his movies, he is known for his acrobatic fighting style, comic timing, use of improvised weapons, and innovative stunts. Jackie Chan has been acting since the 1970s and has appeared in over 100 films.\n\nChan has received stars on the Hong Kong Avenue of Stars and the Hollywood Walk of Fame. As a cultural icon, Chan has been referenced in various pop songs, cartoons, and video games. Chan is also a Cantopop and Mandopop star, having released a number of albums and sung many of the theme songs for the films in which he has starred.\n\nChan was born on April 7, 1954, in Victoria Peak, in the former Crown colony of Hong Kong, as Chan Kong-sang (meaning 'born in Hong Kong') to Charles and Lee-Lee Chan, refugees from the Chinese Civil War. He was nicknamed Paopao (Chinese: 炮炮, literally meaning 'Cannonball') because he was such a big baby, weighing 12 pounds, or about 5.4 kgs. Since his parents worked for the French Consul to Hong Kong, Chan spent his formative years within the grounds of the consul's residence in the Victoria Peak district. Chan attended the Nah-Hwa Primary School on Hong Kong Island, where he failed his first year, after which his parents withdrew him from the school.\n\nIn 1960, his father immigrated to Canberra, Australia, to work as the head cook for the American embassy, and Chan was sent to the China Drama Academy, a Peking Opera School run by Master Yu Jim-yuen. Chan trained rigorously for the next decade, excelling in martial arts and acrobatics. He eventually became part of the Seven Little Fortunes, a performance group made up of the school's best students, gaining the stage name Yuen Lo in homage to his master. Chan became close friends with fellow group members Sammo Hung and Yuen Biao, the three of them later to be known as the Three Brothers or Three Dragons. At the age of 17, he worked as a stuntman in the Bruce Lee films Fist of Fury and Enter the Dragon under the stage name Chan Yuen Lung.   He received his first starring role later that year, in Little Tiger of Canton, which had a limited release in Hong Kong in 1973.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/pmKJ4sGvPQ3imzXaFnjW4Vk5Gyc.jpg",
    born: "1954-04-07",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Jared Padalecki",
    bio:
      "From Wikipedia, the free encyclopedia.  Jared Tristan Padalecki (born July 19, 1982) is an American actor. He grew up in Texas and came to fame in the early 2000s after appearing on the television series Gilmore Girls as well as in several Hollywood films, including New York Minute and House of Wax. Padalecki is best known for his role as Sam Winchester on the CW television series Supernatural.\n\nDescription above from the Wikipedia article Jared Padalecki, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/uQLe1lfEBul3locVlV8nXD6n8TI.jpg",
    born: "1982-07-19",
    gender: "Male"
  },
  {
    profession: ["Actor"],
    name: "Karen Gillan",
    bio:
      "Karen Sheila Gillan (born 28 November 1987) is a Scottish actress and former model who is best known for her current portrayal of Amy Pond in the British science fiction series Doctor Who.\n\nDescription above from the Wikipedia article Karen Gillan, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/b6rSmkcM3XvSxCb3aLEP8JaG07q.jpg",
    born: "1987-11-28",
    gender: "Female"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Ed Harris",
    bio:
      "Edward Allen 'Ed' Harris (born November 28, 1950) is an American actor, writer, and director, known for his performances in Appaloosa, The Rock, The Abyss, Apollo 13, A Beautiful Mind, A History of Violence, and The Truman Show. Harris has also narrated commercials for The Home Depot and other companies.\n\nDescription above from the Wikipedia article Ed Harris, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/atzm7ZGRFSWJHQT6qKmzjmNQ9GA.jpg",
    born: "1950-11-28",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Mark Hamill",
    bio:
      "Mark Richard Hamill (born September 25, 1951) is an American actor, voice artist, producer, director, and writer. Hamill is best known for his role as Luke Skywalker in the original Star Wars trilogy and also well known for voice-acting characters such as the Joker in various animated series, animated films and video games, beginning with Batman: The Animated Series, the Skeleton king in Super Robot Monkey Team Hyperforce Go!, Fire Lord Ozai in Avatar: The Last Airbender, Master Eraqus in Kingdom Hearts: Birth by Sleep, Skips in Regular Show, and Senator Stampington on Metalocalypse.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/fk8OfdReNltKZqOk2TZgkofCUFq.jpg",
    born: "1951-09-25",
    gender: "Male"
  },
  {
    profession: ["Actor"],
    name: "Alexandra Daddario",
    bio:
      "Alexandra Anna Daddario (born March 16, 1986) is an American actress, known to film audiences as Annabeth Chase in the 2010 film Percy Jackson &amp; the Olympians: The Lightning Thief. Daddario was also in The Squid and the Whale, All My Children, The Babysitters, The Attic, The Hottest State, White Collar, It's Always Sunny in Philadelphia, and Bereavement. She will star as the protagonist 'Heather Miller' in the 2013 horror film Texas Chainsaw 3D.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/s544zfrPI1Dnk60t1x1KUXF4iH3.jpg",
    born: "1986-03-16",
    gender: "Female"
  },
  {
    profession: ["Actor"],
    name: "Melissa Benoist",
    bio:
      "Melissa Benoist is an American actress and singer, known for her portrayal of 'Marley Rose' on Glee and the title role in Supergirl. Furthermore, she has appeared in a number of television series, including Homeland, The Good Wife and Law & Order.\n\nMelissa's first film was in singer Mariah Carey's Tennessee (2008). She also appeared in Whiplash (2014), which won top prizes (Grand Jury and Audience awards) at the Sundance Film Festival in Park City, Utah, in January 2014",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/fj3Va0w2OyKaQALGomMgpq2B2Fu.jpg",
    born: "1988-10-04",
    gender: "Female"
  },
  {
    profession: ["Actor"],
    name: "Mandy Moore",
    bio:
      "Amanda Leigh 'Mandy' Moore (born April 10, 1984) is an American singer-songwriter, actress and fashion designer. Moore became famous as a teenager in the late 1990s, after the release of her teen pop albums So Real, I Wanna Be with You, and Mandy Moore. In 2007, she took an adult pop-folk direction with the release of Wild Hope. Her most recent album, Amanda Leigh, was released on May 26, 2009. Moore has sold more than 10 million records worldwide. Moore subsequently branched out into film, starring in 2002's A Walk to Remember and later in other movies, such as Chasing Liberty, Saved! and License to Wed. Most recently Moore provided the voice of Rapunzel in Tangled. In April 2011, she ranked 5th in People's annual Most Beautiful issue.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/15sDtRpe301tZWrRYV31wjMuFpx.jpg",
    born: "1984-04-10",
    gender: "Female"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Andy Serkis",
    bio:
      "Andrew 'Andy' Clement Serkis (born 20 April 1964) is an English film actor and director. He is best known for his performance capture roles comprising motion capture acting, animation and voice work for such computer-generated characters as Gollum in The Lord of the Rings film trilogy (2001–2003) and The Hobbit: An Unexpected Journey (2012), King Kong in the eponymous 2005 film, Caesar in the Planet of the Apes reboot series (2011–17), Captain Haddock / Sir Francis Haddock in Steven Spielberg's The Adventures of Tintin (2011), and Supreme Leader Snoke in Star Wars: The Force Awakens (2015). Upcoming performance capture roles include Supreme Leader Snoke in Star Wars: The Last Jedi (2017), and Baloo in Jungle Book (2018).\n\nSerkis's film work in motion capture has been critically acclaimed. He has received an Empire Award, and two Saturn Awards for his motion-capture acting. He earned a Golden Globe nomination for his portrayal of serial killer Ian Brady in the British television film Longford (2006) and was nominated for a BAFTA for his portrayal of new wave and punk rock musician Ian Dury in the biopic Sex & Drugs & Rock & Roll (2010).\n\nIn 2015, he began playing Ulysses Klaue in the Marvel Cinematic Universe beginning with Avengers: Age of Ultron. Serkis has his own motion capture workshop, The Imaginarium Studios in London, which he used for Jungle Book. He made his directorial debut with the 2017 film Breathe.\n\nDescription above from the Wikipedia article Andy Serkis, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/eNGqhebQ4cDssjVeNFrKtUvweV5.jpg",
    born: "1964-04-20",
    gender: "Male"
  },
  {
    profession: ["Actor"],
    name: "Ahn So-hee-I",
    bio: "",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/5T20rY7cg37bnSVDRJEfiSuRIQ1.jpg",
    born: null,
    gender: "Female"
  },
  {
    profession: ["Actor"],
    name: "Lily James",
    bio:
      "Lily Chloe Ninette Thomson (born 27 December 1989), known as Lily James, is an English actress. She played Lady Rose Aldridge in the ITV period drama Downton Abbey and the title role in the 2015 Disney film Cinderella.\n\nIn 2011, James played Taylor in Vernon God Little at the Young Vic Theatre in Tanya Ronder's stage adaptation of the novel Vernon God Little directed by Rufus Norris, Nina in a modern adaptation of The Seagull at Southwark Playhouse, and Desdemona in Daniel Evans production of Othello at the Crucible Theatre, Sheffield, alongside Dominic West and Clarke Peters. Quentin Letts wrote in The Daily Mail: 'We may have a new star actress on our hands.... She left drama school only last year, yet she practically sweeps all before her as Desdemona in this Othello. Poise, diction, allure – she has them all. ... Her character’s love affair with a much older husband is completely believable'.\n\nIn 2012, James played the role of Katrina in Play House and Marijka in Definitely the Bahamas in a double bill written and directed by Martin Crimp at the Orange Tree Theatre in Richmond, London as part of the theatre's fortieth anniversary. Charles Spencer of The Telegraph wrote that 'it is performed with a persuasive mixture of mischief and deeper feeling by Obi Abili and Lily James, the latter combining a mixture of neuroticism and glowing sexual allure that proves extraordinarily potent.'\n\nAlso in 2012, James played the role of Korrina in Warner Brothers' Wrath of the Titans and starred in Fast Girls, written by Noel Clarke, centered around a group of young female athletes competing in the World Championships. Her television credits include Ethel Brown in the 2010 BBC production of Richmal Crompton's Just William, Poppy in the fourth season of ITV's Secret Diary of a Call Girl (2011), and the rebellious Lady Rose in the last episode of series three, later becoming a main character in the fourth and fifth seasons of the popular British series Downton Abbey. James played the title character in the 2015 live-action Disney film version of Cinderella.\n\nThe film was released on 13 March 2015. James, as Cinderella, was photographed by Annie Leibovitz, in the blue gown that she wears to the ball, for the December 2014 issue of Vogue.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/vIqnG1vc0PtRurDwH5E24yaMtBg.jpg",
    born: "1989-04-05",
    gender: "Female"
  },
  {
    profession: ["Actor"],
    name: "Lauren German",
    bio:
      "Lauren German (born November 29, 1978) is an American actress, known for her role as the hitchhiker in the 2003 remake of The Texas Chainsaw Massacre, as well as for starring in the 2007 film Hostel: Part II, in which she plays one of the lead characters. She is also known for her role in A Walk to Remember, in which she plays a popular and jealous ex-girlfriend named Belinda.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/qhHegRoOL7cZu6rMNRezHbIEj75.jpg",
    born: "1978-11-29",
    gender: "Female"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Russell Crowe",
    bio:
      "Russell Ira Crowe (born 7 April 1964) is a New Zealand-born Australian actor and musician. His acting career began in the late 1980s with roles in Australian television series including Police Rescue and Neighbours. In the early 1990s, Crowe's local prominence peaked when he won the Australian Film Industry Award for Best Actor for his portrayal of an inner-city skinhead in the Geoffrey Wright film, Romper Stomper. In the late 1990s, Crowe transferred his acting ambitions to the USA with his breakout role in L.A. Confidential (1997). Crowe won the Academy Award for Best Actor for Gladiator in 2001 and has received three Academy Award nominations for Best Actor in a Leading Role: The Insider (1999), Gladiator (2000) and A Beautiful Mind (2001). He is also co-owner of National Rugby League team the South Sydney Rabbitohs.\n\nDescription above from the Wikipedia article Russell Crowe, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/ktuOAyUHM2u2YPPChH8gAArxJ7b.jpg",
    born: "1964-04-07",
    gender: "Male"
  },
  {
    profession: ["Actor"],
    name: "Salma Hayek",
    bio:
      "Actress Salma Hayek is one of the most notable figures of Mexican descent in Hollywood today. She is most famous for her work in the 2002 film Frida, for which she was nominated for a Best Actress Academy Award. In 2001 she received Glamour magazine's Woman of the Year Award, and then in 2005, Time Magazine's '25 Most Influental Hispanics' award.\n\nSalma comes from a prominent Veracruz family of Spanish and Lebanese descent. She was raised Roman Catholic, and at a young age attended boarding school in the United States where she was diagnosed with dyslexia.  Salma later studied International Relations in Mexico City at the Universidad Iberomericanan. Her first name, Salma, is Arabic for 'peace'.\n\nIt wasn't until the age of 23 that Hayek began her acting career with a role in the successful Mexican TV series, Teresa.  She instantly became a Mexican hero, and five years later starred in El Callejon de los Milagros, a film that won more awards than any other in Mexican history.  At the age of 25, Salma moved to Los Angeles and started her Hollywood career. Robert Rodriguez cast Salma in his 1995 film Desperado, which she starred in with actor Antonio Banderas. The film was a major success and Salma was even nominated for Best Supporting Actress. This kickstarted her career and over the next decade, she starred in over 25 films that include Frida (2002), Wild Wild West (1999), and Fools Rush In (1997).  Salma is married to French billionaire Francois Pinault, and together the couple has one daughter, Valentina. In her personal life, Salma is strongly involved with charitable organizations dealing with Women's rights advocacy.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/u5mg73xKVqm8oT93HoMmsgQHyoK.jpg",
    born: "1966-09-02",
    gender: "Female"
  },
  {
    profession: ["Actor"],
    name: "Anne Hathaway",
    bio:
      "Anne Jacqueline Hathaway (born November 12, 1982) is an American actress. After several stage roles, she appeared in the 1999 television series Get Real. She played Mia Thermopolis in The Princess Diaries (2001). Over the next three years, Hathaway reprised that role for The Princess Diaries 2: Royal Engagement, and starred in family films, appearing as the title character in Ella Enchanted, both in 2004.\n\nHathaway had dramatic roles in Havoc and Brokeback Mountain, both in 2005. She starred in The Devil Wears Prada (2006) and in Becoming Jane (2007) as Jane Austen. In 2008, she was acclaimed for her lead role in Rachel Getting Married, for which she won awards and was nominated for the Academy Award for Best Actress. In 2010, she starred in the box office hits Valentine's Day and Tim Burton's Alice In Wonderland, as well as Love and Other Drugs. In 2011, she had a voice role in the animated box office Rio. She is scheduled to play Selina Kyle/Catwoman in Christopher Nolan's The Dark Knight Rises.\n\nPeople magazine named her one of its breakthrough stars of 2001, and she first appeared on its list of the world's 50 Most Beautiful People in 2006.\n\nDescription above from the Wikipedia article Anne Hathaway (actress), licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/xENM3XJAtdpolwELYDy9iaCtU4m.jpg",
    born: "1982-11-12",
    gender: "Female"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Jason Momoa",
    bio: "",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/nR7DeguIKnXWaFDrWQz0mIySoDg.jpg",
    born: "1979-08-01",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Tommy Lee Jones",
    bio:
      "Tommy Lee Jones (born September 15, 1946) is an American actor and film director.\n\nHe has received three Academy Award nominations, winning one as Best Supporting Actor for the 1993 thriller film The Fugitive. His notable film roles include federal marshal Samuel Gerard in The Fugitive and its sequel U.S. Marshals, the villain 'Two-Face' in Batman Forever, terrorist William Strannix in Under Siege, Agent K in the Men in Black films, former Texas Ranger Woodrow F. Call in Lonesome Dove, Ed Tom Bell in No Country for Old Men, a Texas Ranger in Man of the House and rancher Pete Perkins in The Three Burials of Melquiades Estrada. Jones has also portrayed real-life figures such as businessman Howard Hughes, executed murderer Gary Gilmore, Oliver Lynn in Coal Miner's Daughter and baseball great Ty Cobb.\n\nDescription above from the Wikipedia article Tommy Lee Jones, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/gRXugLFvr1oHZ6alLUxmYDq8cgW.jpg",
    born: "1946-09-15",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Sean Connery",
    bio:
      "Sir Thomas Sean Connery (born 25 August 1930) is a Scottish actor and producer who has won an Academy Award, two BAFTA Awards (one of them being a BAFTA Academy Fellowship Award) and three Golden Globes.\n\nConnery is best-known for portraying the character James Bond, starring in seven Bond films between 1962 and 1983 (six 'official' EON productions films and the non-official Kevin McClory-helmed Thunderball remake, Never Say Never Again). In 1988, Connery won the Academy Award for Best Supporting Actor for his role in The Untouchables. His film career also includes such films as Marnie, The League of Extraordinary Gentlemen, Indiana Jones and the Last Crusade, The Hunt for Red October, Highlander, Murder on the Orient Express, Dragonheart, and The Rock.\n\nConnery has been polled as 'The Greatest Living Scot'. He was knighted in July 2000. In 1989, he was proclaimed 'Sexiest Man Alive' by People magazine, and in 1999, at age 69, he was voted 'Sexiest Man of the Century'. In tribute a bronze bust sculpture of Connery was placed in the capital city of Estonia.\n\nDescription above from the Wikipedia article Sean Connery, licensed under CC-BY-SA, full list of contributors on Wikipedia",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/ce84udJZ9QRSR44jxwK2apM3DM8.jpg",
    born: "1930-08-25",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Gustaf Skarsgård",
    bio:
      "Gustaf Skarsgård (born November 12, 1980 in Stockholm) is a Swedish actor, son of My and Stellan Skarsgård and brother of Eija, Valter, Sam, Bill and Alexander Skarsgård. His godfather is acclaimed Swedish actor Peter Stormare.\n\nDescription above from the Wikipedia article Gustaf Skarsgård, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/twqsa4RjJi9WhaTfzYglz9rd2B0.jpg",
    born: "1980-11-12",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Bunta Sugawara",
    bio: "",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/w3J8EkYDHi0UQ3JPradqKBfa22V.jpg",
    born: "1933-08-16",
    gender: "Male"
  },
  {
    profession: ["Actor"],
    name: "Gina Gershon",
    bio:
      "From Wikipedia, the free encyclopedia.\n\nGina L. Gershon (born June 10, 1962) is an American film, television and stage actress, singer and author. She is known for her roles in the films Cocktail (1988), Showgirls (1995), Bound (1996), Face/Off (1997), The Insider (1999), Demonlover (2002), P.S. I Love You (2007), Five Minarets in New York (2010), Killer Joe (2011) and House of Versace (2013). She has also had supporting roles in FX's Rescue Me and HBO's How to Make It in America.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/jaUQhGVmemkSyS5O0fcRkhGTOUq.jpg",
    born: "1962-06-10",
    gender: "Female"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Allan Edwall",
    bio:
      "Growing up in the landscape of Jämtland, Edwall spent some time working on a ship before he arrived in Stockholm in the 1940s, just barely making a living as a writer, painter and poet before he was admitted to the Royal Dramatic Theater's acting school in 1949. After graduation he worked at the theater in the 1950s and 1960s  but he was mainly a jack-of-all-trades, appearing on the stage, in movies as well as recording and publishing his own songs.\n\nHe is remembered for a string of queer roles, such as Emil's father in the Emil of Lönneberga films, the cheerful vagabond in the Rasmus and the vagabond movie, the dying father in Ingmar Bergman's Fanny and Alexander as well as Carlsson in the TV adaptation of Strindberg's Hemsöborna.\n\nIn the later part of his life he owned his own theater, Brunnsgatan 4, in Stockholm.  Biography by Mattias Thuresson.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/yhvy20RYvKAeejJMF16MNHdzCs9.jpg",
    born: "1924-08-25",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Mark Wahlberg",
    bio:
      "Mark Robert Michael Wahlberg (born June 5, 1971) is an American actor, film and television producer, and former rapper. He was known as Marky Mark in his earlier years, and became famous for his 1991 debut as a musician with the band Marky Mark and the Funky Bunch. He was named No.1 on VH1's 40 Hottest Hotties of the 90's. He is well known for his roles in films such as Boogie Nights (1997), Three Kings (1999), The Perfect Storm (2000), Planet of the Apes (2001), The Italian Job (2003), I Heart Huckabees (2004), Four Brothers (2005), The Departed (2006), Invincible (2006), Shooter (2007), and The Fighter (2010). He has also served as the executive producer of the TV series Entourage and Boardwalk Empire.\n\nDescription above from the Wikipedia article Mark Wahlberg, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/z2wJh5n7qZRUE1y9uB8UrivAV2b.jpg",
    born: "1971-06-05",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Bogdan Diklić",
    bio:
      "Bogdan Diklić is a Serbian actor.\n\nIn August 2009, he received Life Achievement Award 'Pavle Vuisić' for his roles in Yugoslav cinematography.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/eeBGTf9wabGxMoIXderNQS9LAiV.jpg",
    born: "1953-08-01",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "David Fincher",
    bio:
      "David Andrew Leo Fincher (born August 28, 1962) is an American film director and music video director. Known for his dark and stylish thrillers, such as Seven (1995), The Game (1997), Fight Club (1999), Panic Room (2002), and Zodiac (2007), Fincher received Academy Award nominations for Best Director for his 2008 film The Curious Case of Benjamin Button and his 2010 film The Social Network, which also won him the Golden Globe and the BAFTA for best director.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/dcBHejOsKvzVZVozWJAPzYthb8X.jpg",
    born: "1962-08-28",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Nicholas Hoult",
    bio:
      "Nicholas Caradoc Hoult (born 7 December 1989) is an English actor, best known for the role as Marcus Brewer in the 2002 film About a Boy and as Tony Stonem in the E4 BAFTA winning television series, Skins.\n\nDescription above from the Wikipedia article Nicholas Hoult, licensed under CC-BY-SA,full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/27NbnWKzco1CCDHtR2AVVab8Dli.jpg",
    born: "1989-12-07",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Takeshi Kitano",
    bio:
      "Takeshi Kitano (born January 18, 1947) is a Japanese filmmaker, comedian, singer, actor, tap dancer, film editor, presenter, screenwriter, author, poet, painter, and one-time video game designer who has received critical acclaim, both in his native Japan and abroad, for his highly idiosyncratic cinematic work. The famed Japanese film critic Nagaharu Yodogawa once dubbed him 'the true successor' to influential filmmaker Akira Kurosawa. With the exception of his works as a film director, he is known almost exclusively by the name Beat Takeshi. Since April 2005, he has been a professor at the Graduate School of Visual Arts, Tokyo University of the Arts. Kitano owns his own talent agency and production company, Office Kitano, which launched Tokyo Filmex in 2000. Some of Kitano's earlier films are dramas about Yakuza gangsters or the police. Described by critics as using an acting style that is highly deadpan or a camera style that approaches near-stasis, Kitano often uses long takes where nothing appears to be happening, or editing that cuts immediately to the aftermath of an event. Many of his films express a bleak or nihilistic philosophy, but they are also filled with a great deal of humor and affection for their characters. Kitano's films leave paradoxical impressions and can seem controversial. While formally disguised as dark comedies or gangster movies, his films raise moral questions and provide food for thought. The Japanese public knows him primarily as a TV host and comedian, and he is well remembered for the leading role of the comedy show Oretachi Hyōkin-zoku (1981–1989) and for the game show Takeshi's Castle (1986–1989). His portrayal of Zatōichi in the 2003 movie is his biggest domestic commercial success. He hosts a weekly television program called Beat Takeshi's TV Tackle, a kind of panel discussion among entertainers and politicians regarding controversial current events. In 2010 the Fondation Cartier pour l'art contemporain in Paris held a one-man show displaying his paintings and installations. A room in the basement played a 12-hour loop of his work as a TV host.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/xkXZ7HC8uyhu5MtNnbdP8mhdiFN.jpg",
    born: "1947-01-18",
    gender: "Male"
  },
  {
    profession: ["Actor"],
    name: "Asia Argento",
    bio:
      "Asia Argento (born Aria Maria Vittoria Rossa Argento; 20 September 1975) is an Italian actress, singer, model, and director.\n\nHer mother is actress Daria di Nicolodi and her father is Dario de Argento, an Italian film director, producer and screenwriter, well known for his work in the Italian giallo genre and for his influence on modern horror and slasher movies. Her maternal great-grandfather was composer Alfredo Casella.\n\nAsia Argento started acting at the age of nine,[9] playing a small role in a film by Sergio Citti. She also had a small part in Demons 2, a 1986 film written and produced by her father, at the age of 10, as well as its unofficial sequel, La Chiesa (The Church), when she was 14, and Trauma (1993), when she was 18. She received the David di Donatello (Italy's version of the Academy Award) for Best Actress in 1994 for her performance in Perdiamoci di vista, and again in 1996 for Compagna di viaggio, which also earned her a Grolla d'oro award. In 1998, Argento began appearing in English-language movies, such as B. Monkey and New Rose Hotel.\n\nArgento has proven her ability to work in multiple languages, adding French, with a role as Charlotte de Sauve in 1994's La Reine Margot. That same year, she made her first foray into directing, calling the shots behind the short films Prospettive and A ritroso. In 1996, she directed a documentary on her father, and in 1998 a second one on Abel Ferrara, which won her the Rome Film Festival Award.\n\nArgento directed and wrote her first movie, Scarlet Diva (2000), which her father co-produced. In 2002, she portrayed Russian undercover spy Yelena in the action film XXX alongside Vin Diesel. In 2004 she directed her second film The Heart Is Deceitful Above All Things, based on a book by JT LeRoy, the pen name of Laura Albert, this time in the United States.\n\nDescription above from the Wikipedia article Asia Argento, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/xT92C6WbaFaJlSLQJGp0ZjYoigS.jpg",
    born: "1975-09-20",
    gender: "Female"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Chris Pratt",
    bio:
      "Christopher Michael 'Chris' Pratt (born June 21, 1979) is an American actor, best known for his roles as Harold Brighton 'Bright' Abbott in the television series Everwood, the recurring character Winchester 'Ché' Cook in season 4 of The OC, and Andy Dwyer in the television series Parks and Recreation.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/n4DD1AYU7WEMNPLga1TxqnHivn1.jpg",
    born: "1979-06-21",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Benedict Cumberbatch",
    bio:
      "Benedict Timothy Carlton Cumberbatch (born 19 July 1976) is an English film, television, and theatre actor. His most acclaimed roles include: Stephen Hawking in the BBC drama 'Hawking' (2004); William Pitt in the historical film 'Amazing Grace' (2006); the protagonist Stephen Ezard in the miniseries thriller 'The Last Enemy' (2008); Paul Marshall in 'Atonement' (2007); Bernard in 'Small Island' (2009); and Sherlock Holmes in the modern BBC adaptation series 'Sherlock' (2010).\n\nHe is the son of actors Timothy Carlton (Timothy Carlton Congdon Cumberbatch) and Wanda Ventham.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/wz3MRiMmoz6b5X3oSzMRC9nLxY1.jpg",
    born: "1976-07-19",
    gender: "Male"
  },
  {
    profession: ["Actor"],
    name: "Kristin Scott Thomas",
    bio:
      "From Wikipedia, the free encyclopedia.\n\nKristin A. Scott Thomas, OBE (born 24 May 1960) is an English actress who has also acquired French nationality. She gained international recognition in the 1990s for her roles in Bitter Moon, Four Weddings and a Funeral and The English Patient.\n\nSince the 1980s, she has also worked in French cinema in films such as the thriller Tell No One and Philippe Claudel's I've Loved You So Long. She has lived in France since she was nineteen, has brought up her three children in Paris, and says she considers herself more French than British. She has been a member of the Légion d'honneur since 2005\n\nDescription above from the Wikipedia article Kristin Scott Thomas, licensed under CC-BY-SA, full list of contributors on Wikipedia",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/9zBXGGcUBi7DnulKcFPCAdwrKY0.jpg",
    born: "1960-05-24",
    gender: "Female"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Leonardo DiCaprio",
    bio:
      "Leonardo DiCaprio is an American actor and film producer.\n\nHe began his film career by starring as Josh in Critters 3 before starring in the film adaptation of the memoir This Boy's Life (1993) alongside Robert De Niro. DiCaprio was praised for his supporting role in the drama What's Eating Gilbert Grape (1993), and gained public recognition with leading roles in the drama The Basketball Diaries (1995) and the romantic drama Romeo + Juliet (1996), before achieving international fame with James Cameron's epic romance Titanic (1997) He has been nominated for six Academy Awards—five for acting and one for producing—and in 2016, he won the Academy Award for Best Actor for The Revenant.\n\nDiCaprio is the founder of his own production company, named Appian Way Productions. He is also a committed environmentalist.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/A85WIRIKVsD2DeUSc8wQ4fOKc4e.jpg",
    born: "1974-11-11",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Woody Harrelson",
    bio:
      "Woodrick Tracy 'Woody' Harrelson (born July 23, 1961) is an American actor and comedian. Harrelson's breakthrough role came in the television sitcom Cheers as bartender Woody Boyd. Notable film characters include basketball hustler Billy Hoyle in White Men Can't Jump, bowler Roy Munson in Kingpin, serial killer Mickey Knox in Natural Born Killers, magazine publisher Larry Flynt in The People vs. Larry Flynt, country singer Dusty in A Prairie Home Companion, bounty hunter Carson Wells in No Country for Old Men, zombie killer Tallahassee in Zombieland, blind piano player/meat salesman Ezra Turner in Seven Pounds, conspiracy nut Charlie Frost in 2012, a delusional man who believes that he is a superhero named Defendor in Defendor and Cpt. Tony Stone in The Messenger. For The People vs. Larry Flynt and The Messenger, Harrelson earned Academy Award nominations for Best Actor and Best Supporting Actor, respectively.\n\nDescription above from the Wikipedia article Woody Harrelson, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/1ecdooAHICUhCZKKEKlFtccEmTU.jpg",
    born: "1961-07-23",
    gender: "Male"
  },
  {
    profession: ["Actor"],
    name: "Daisy Ridley",
    bio:
      "Daisy Jazz Isobel Ridley (born 10 April 1992) is an English actress. Ridley was born in Westminster, London.\n\nHer great-uncle was actor and playwright Arnold Ridley, of Dad's Army fame. She attended Tring Park School for the Performing Arts in Hertfordshire, graduating in 2010 at the age of 18.\n\nRidley has appeared in the television programmes Youngers, Silent Witness, Mr Selfridge and Casualty. She also appeared in the short film Blue Season, which was entered into the Sci-Fi-London 48-Hour Film Challenge. She played the lead in film three of Lifesaver, an interactive film which was nominated for a BAFTA British Academy Award. She has also appeared in the music video for Wiley's song 'Lights On'.\n\nIn April 2014, it was announced that she will play Rey, one of the lead characters in Star Wars: The Force Awakens. She was chosen for the film in February 2014. The casting of Ridley has generally been seen as a deliberate move from director J. J. Abrams, as he wishes to repeat the casting of relatively unknown actors for the lead roles like George Lucas did with the first Star Wars film in 1977.\n\nAfter receiving several competing offers, Ridley switched from her original talent agency Jonathan Arun to the United Talent Agency in August 2014. Following a two-month stint with UTA, Ridley signed on with the Creative Artists Agency in October 2014.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/iiBJCkVVLHAUBW6vbUhJ3RtxlXv.jpg",
    born: "1992-04-10",
    gender: "Female"
  },
  {
    profession: ["Actor"],
    name: "Abbie Cornish",
    bio:
      "Abbie Cornish, born on 7th August 1982, is an Australian actress. She is well known in Australia for a number of film and television roles, including Penne in the comedy/lifestyle parody Life Support, her award-winning lead performance in 2004's Somersault and her role as Fannie Brawne in Bright Star.\n\nHer career began at the age of thirteen, when she began taking jobs as a model after reaching the finals of a Dolly Magazine competition. By the time she was sixteen, Cornish was juggling television acting roles with studying for her Higher School Certificate, with the intention of pursuing a career as a veterinarian. In 1999, Cornish was awarded the Australian Film Institute Young Actor's Award for her role in the ABC's television show Wildside and was soon offered her first role in a feature film, The Monkey's Mask. In 2001, Abbie landed the role of Reggie McDowell, a character on the Australian tv show 'Outriders'. In 2004, Cornish appeared in the award-winning short film Everything Goes with Hugo Weaving.\n\nShe received the Australian Film Institute Award for Best Actress in a Leading Role, Best Actress at the FCCA and IF Awards and Best Breakthrough Performance at the 2005 Miami International Film Festival for her role in 2004's Somersault, the film which raised her to international prominence. Cornish received widespread critical acclaim for her role in 2006's Candy, which she starred in opposite Heath Ledger. She has also starred in A Good Year, Elizabeth: The Golden Age and Kimberly Peirce's latest movie, Stop-Loss. She narrated her film Sucker Punch on the 2010 San Diego Comic-Con International.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/gDQD9GzX3tBfYnvafBnVrWTptfV.jpg",
    born: "1982-08-07",
    gender: "Female"
  },
  {
    profession: ["Actor"],
    name: "Lauren Cohan",
    bio:
      "Lauren Cohan (born January 7, 1982) is a British American actress and model, best known for her role as Maggie Greene on The Walking Dead (2011–present). She is also known for her recurring roles on the television series Supernatural (2007–2008), Chuck (2011) and The Vampire Diaries (2010–2012) and in the comedy film Van Wilder: The Rise of Taj (2006), the psychological thriller The Boy & played DC Comics character, Martha Wayne in Batman v Superman: Dawn of Justice (2016).\n\nAfter her film debut Casanova as Sister Beatrice, she starred in the sequel to Van Wilder, Van Wilder: The Rise of Taj as Charlotte Higginson in 2006. Her next role was in the 2007 film Float. In February 2010, she was cast in Death Race 2: Frankenstein Lives, with Sean Bean and Danny Trejo and also supernatural-horror The Boy releasing in 2016 where Lauren plays the main character Greta.\n\nCohan was cast in season three of Supernatural as Bela Talbot, a thief who procures valuable supernatural objects and sells them to very rich, very powerful people in the supernatural world. The character appeared in six episodes of the series.\n\nCohan played the recurring character Rose, a 560-year-old vampire, in The Vampire Diaries. In 2011, she joined the television series Chuck in a recurring role playing Vivian Volkoff, a 'charming, sophisticated socialite' from the United Kingdom, and the daughter of primary villain, Alexei Volkoff. She also guest starred on shows such as Modern Family, CSI: NY, Cold Case, Life, Archer, and The Bold and the Beautiful.\n\nCohan starred in a pilot for The CW called Heavenly in which she played the lead character, an attorney who teams up with an angel; however, it was not picked up as a series.\n\nIn 2011, Cohan was cast in her most notable role as Maggie Rhee on The Walking Dead, an AMC horror drama series based on the comic book series of the same name. She first appeared in the second season as a recurring character, but she was among the starring roles at the start of the third season. The drama is the highest rated series in cable television history.\n\nDescription above from the Wikipedia article Lauren Cohan, licensed under CC-BY-SA, full list of contributors on Wikipedia",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/5W4AV3ZXn38NlEMqPy9QPjwRRz8.jpg",
    born: "1982-01-07",
    gender: "Female"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Ben Kingsley",
    bio:
      "Sir Ben Kingsley, CBE (born 31 December 1943), born Krishna Pandit Bhanji , is a British actor. He has won an Oscar, BAFTA, Golden Globe and Screen Actors Guild awards in his career. He is known for starring as Mohandas Gandhi in the film Gandhi in 1982, for which he won the Academy Award for Best Actor. He is also known for his performances in the films Schindler's List (1993), Prince of Persia: The Sands of Time (2010), and House of Sand and Fog.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/2Eu3j31JDJek70ZXLY6xfeUaJoR.jpg",
    born: "1943-12-31",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Bryan Cranston",
    bio:
      "Bryan Lee Cranston (born March 7, 1956) is an American actor, voice actor, writer and director. He is perhaps best known for his roles as Hal, the father in the Fox situation comedy 'Malcolm in the Middle', and as Walter White in the AMC drama series Breaking Bad, for which he has won three consecutive Outstanding Lead Actor in a Drama Series Emmy Awards. Other notable roles include Dr. Tim Whatley on Seinfeld, Doug Heffernan's neighbor in The King of Queens, Astronaut Buzz Aldrin in From the Earth to the Moon, and Ted Mosby's boss on How I Met Your Mother.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/fnglrIFnI5cK4OAh66AZN86mkFq.jpg",
    born: "1956-03-07",
    gender: "Male"
  },
  {
    profession: ["Actor"],
    name: "Edwige Fenech",
    bio:
      "Fenech was born in Bône (now Annaba), in French Algeria to a Maltese father and Sicilian mother. From the late 1960s to early 1980s, Fenech starred in many types of European movies. She is best known for her erotic comedies, and began to work in that field in the late 1960s with Austrian director Franz Antel. Fenech also achieved fame with giallo and sex films such as Five Dolls for an August Moon, Your Vice Is a Locked Room and Only I Have the Key and Sex with a Smile, many of which were directed by Sergio Martino.\n\nIn the 1980s, she became a television personality, typically appearing with Barbara Bouchet on a chat show on Italian television. In the mid-1990s, she was engaged to the well-known Italian industrialist Luca di Montezemolo.\n\nAfter many years of work in movie production (she produced, among others, The Merchant of Venice, 2004, with Al Pacino), Fenech accepted Quentin Tarantino's offer to star in another movie, Hostel: Part II (2007), directed by Eli Roth. A British general named Ed Fenech (played by Mike Myers) is a character in Tarantino's 2009 film Inglourious Basterds.\n\nDescription above from the Wikipedia article Edwige Fenech, licensed under CC-BY-SA, full list of contributors on Wikipedia",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/6F7Mv45Hbn3BLugRTu6MKAZjnZ.jpg",
    born: "1949-12-12",
    gender: "Female"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Bill Nighy",
    bio:
      "William Francis 'Bill' Nighy (pronounced /ˈnaɪ/ ny; born 12 December 1949) is a British actor and comedian.\n\nHe worked in theatre and television before his first cinema role in 1981, and made his name in television with The Men's Room in 1991, in which he played the womanizer Prof. Mark Carleton, whose extra-marital affairs kept him 'vital'. He became known around the world in 2003 as Billy Mack, the aging pop star in Love Actually, and in the same year played James Mortmain, the eccentric husband struggling to keep his family afloat in a decaying English castle, in I Capture the Castle. He is also known for his roles in the films Underworld, Shaun of the Dead, The Hitchhiker's Guide to the Galaxy, Pirates of the Caribbean, Hot Fuzz, Valkyrie, G-Force and provided voice talents in the films The Magic Roundabout, Flushed Away and Rango. He recently played Rufus Scrimgeour in Harry Potter and the Deathly Hallows. Bill Nighy is a Patron and supporter of the artistic collective The Factory Theatre Company alongside other actors such as Mark Rylance, Ewan McGregor and Richard Wilson. Other notable members include founder Alex Hassell, Catherine Bailey and Alan Morrissey.\n\nDescription above from the Wikipedia article Bill Nighy, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/imAkeJi8C8ZHpPPB8RP92AD3kYW.jpg",
    born: "1949-12-12",
    gender: "Male"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Owen Wilson",
    bio:
      "Owen Cunningham Wilson (born November 18, 1968) is an American actor and screenwriter from Dallas, Texas. His older brother, Andrew and younger brother, Luke, are also actors. He has had a long association with filmmaker Wes Anderson, having shared co-writing and acting credits for Bottle Rocket (1996) and The Royal Tenenbaums (2001), which was nominated for an Academy Award for Best Original Screenplay, and for his collaborations with fellow actor Ben Stiller. The two have appeared in ten films together.\n\nWilson is best known for his roles in Meet the Parents (2000), Shanghai Noon (2000), Zoolander (2001), Shanghai Knights (2003), Wedding Crashers (2005), Night at the Museum (2006), Cars (2006), Marley & Me (2008), Night at the Museum: Battle of the Smithsonian (2009), Midnight in Paris (2011), Cars 2 (2011) and The Internship (2013).",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/j7oYgvfDiO34VcFdSB7GhM2CSle.jpg",
    born: "1968-11-18",
    gender: "Male"
  },
  {
    profession: ["Actor"],
    name: "Heather Graham",
    bio:
      "Heather Joan Graham (born January 29, 1970) is an American actress. She has appeared in such films as Austin Powers: the Spy Who Shagged Me, Lost in Space, Bowfinger, From Hell, Anger Management, and The Hangover. She received critical acclaim for her performance in the 1989 film Drugstore Cowboy and for her role as Rollergirl in 1997's Boogie Nights, directed by Paul Thomas Anderson.\n\nDescription above from the Wikipedia article Heather Graham, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/rHIEhPAnZQn8BTbB1EVQ5ggEOX7.jpg",
    born: "1970-01-29",
    gender: "Female"
  },
  {
    profession: ["Actor", "Producer"],
    name: "Freddie Highmore",
    bio:
      "Alfred Thomas Highmore is an English  actor best known for his roles in the films 'Finding Neverland'; 'Charlie and the Chocolate Factory'; 'Arthur and the Invisibles'; 'August Rush'; 'The Golden Compass' and 'The Spiderwick Chronicles'. He starred as Norman Bates in 'Bates Motel' A&E's contemporary prequel series of the film 'Psycho'.",
    imageUrl:
      "https://image.tmdb.org/t/p/w235_and_h235_face/5wou22G4dMRcnpMrRyPfLclZ2lD.jpg",
    born: "1992-02-14",
    gender: "Male"
  }
]);

// drop the existing
// insert then
db.awards.drop();
db.awards.insert([
  {
    name: "British Academy Film Awards",
    year: 2017,
    category: "Best Director"
  },
  {
    name: "British Academy Film Awards",
    year: 2017,
    category: "Best Original Score"
  },
  {
    name: "British Academy Film Awards",
    year: 2017,
    category: "Best Cinematography"
  },
  {
    name: "British Academy Film Awards",
    year: 2017,
    category: "Best Adapted Screenplay"
  },
  {
    name: "British Academy Film Awards",
    year: 2017,
    category: "Best Original Screenplay"
  },
  {
    name: "British Academy Film Awards",
    year: 2017,
    category: "Best Supporting Actress"
  },
  {
    name: "British Academy Film Awards",
    year: 2017,
    category: "Best Supporting Actor"
  },
  {
    name: "British Academy Film Awards",
    year: 2017,
    category: "Best Actress"
  },
  {
    name: "British Academy Film Awards",
    year: 2017,
    category: "Best Actor"
  },
  {
    name: "Palme d'Or",
    year: 2017,
    category: "Best Director"
  },
  {
    name: "Palme d'Or",
    year: 2017,
    category: "Best Original Score"
  },
  {
    name: "Palme d'Or",
    year: 2017,
    category: "Best Cinematography"
  },
  {
    name: "Palme d'Or",
    year: 2017,
    category: "Best Adapted Screenplay"
  },
  {
    name: "Palme d'Or",
    year: 2017,
    category: "Best Original Screenplay"
  },
  {
    name: "Palme d'Or",
    year: 2017,
    category: "Best Supporting Actress"
  },
  {
    name: "Palme d'Or",
    year: 2017,
    category: "Best Supporting Actor"
  },
  {
    name: "Palme d'Or",
    year: 2017,
    category: "Best Actress"
  },
  {
    name: "Palme d'Or",
    year: 2017,
    category: "Best Actor"
  },
  {
    name: "Academy Awards",
    year: 2017,
    category: "Best Director"
  },
  {
    name: "Academy Awards",
    year: 2017,
    category: "Best Original Score"
  },
  {
    name: "Academy Awards",
    year: 2017,
    category: "Best Cinematography"
  },
  {
    name: "Academy Awards",
    year: 2017,
    category: "Best Adapted Screenplay"
  },
  {
    name: "Academy Awards",
    year: 2017,
    category: "Best Original Screenplay"
  },
  {
    name: "Academy Awards",
    year: 2017,
    category: "Best Supporting Actress"
  },
  {
    name: "Academy Awards",
    year: 2017,
    category: "Best Supporting Actor"
  },
  {
    name: "Academy Awards",
    year: 2017,
    category: "Best Actress"
  },
  {
    name: "Academy Awards",
    year: 2017,
    category: "Best Actor"
  }
]);

// drop the existing
// insert then
db.users.drop();
db.users.insert([
  {
    firstName: "Kisley",
    lastName: "Shirish",
    password: "$2a$08$ExIcbgf1ijNMKMtlDLD5j.e.VK4htNyZjJYb4nD6Om9ujm.PjWUeu",
    phoneNumber: 8796678632,
    email: "kisley@gmail.com"
  },
  {
    firstName: "Harish",
    lastName: "Kulur",
    password: "$2a$08$fMpWyTUiD39LIgujCYx42uBxGk433ylxthsuCyISRqfoynq78Qbcq",
    phoneNumber: 8796698452,
    email: "kulur@gmail.com"
  },
  {
    firstName: "Syed",
    lastName: "Fazal",
    password: "$2a$08$SlkeBJHSVbZ2UJwglgzISuII4UMEgMopZm8/kCcNOeuxMVQnzNWhK",
    phoneNumber: 7896698452,
    email: "fazal@gmail.com"
  }
]);
