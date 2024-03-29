export const stages = {
    1: {
        id: '1',
        question: 'Choose the best answer.',
        theme: 'LookAndChoose',
        tasks: [
            {
                id: '1',
                option: {
                    sixToTen: {
                        img: ['sixToTen/task1.png'],
                        labels: [
                            {label: 'A book', name: 'task1'},
                            {label: 'A pen', name: 'task1'}
                        ],
                        correctAnswer: 'A book'
                    },
                    elevenToFourteen: {
                        img: ['elevenToFourteen/task1.png'],
                        labels: [
                            {label: 'Twins', name: 'task1'},
                            {label: 'Grandparents', name: 'task1'}
                        ],
                        correctAnswer: 'Twins'
                    }
                }
            },
            {
                id: '2',
                option: {
                    sixToTen: {
                        img: ['sixToTen/task2.png'],
                        labels: [
                            {label: 'A dog', name: 'task2'},
                            {label: 'A cat', name: 'task2'}
                        ],
                        correctAnswer: 'A cat'
                    },
                    elevenToFourteen: {
                        img: ['elevenToFourteen/task2.png'],
                        labels: [
                            {label: 'Dining room', name: 'task2'},
                            {label: 'Bedroom', name: 'task2'}
                        ],
                        correctAnswer: 'Bedroom'
                    }
                }
            },
            {
                id: '3',
                option: {
                    sixToTen: {
                        img: ['sixToTen/task3.png'],
                        labels: [
                            {label: 'A green car', name: 'task3'},
                            {label: 'A blue car', name: 'task3'},
                            {label: 'A yellow car', name: 'task3'},
                            {label: 'A red car', name: 'task3'}
                        ],
                        correctAnswer: 'A yellow car'
                    },
                    elevenToFourteen: {
                        img: ['elevenToFourteen/task3.png'],
                        labels: [
                            {label: 'Dark blue trousers', name: 'task3'},
                            {label: 'Dark blue shorts', name: 'task3'},
                            {label: 'Grey trousers', name: 'task3'},
                            {label: 'Light blue shorts', name: 'task3'}
                        ],
                        correctAnswer: 'Dark blue trousers'
                    }
                }
            },
            {
                id: '4',
                option: {
                    sixToTen: {
                        img: ['sixToTen/task4.png'],
                        labels: [
                            {label: 'A small grey elephant', name: 'task4'},
                            {label: 'A big grey elephant', name: 'task4'},
                            {label: 'A small white mouse', name: 'task4'},
                            {label: 'A big grey dog', name: 'task4'}
                        ],
                        correctAnswer: 'A big grey elephant'
                    },
                    elevenToFourteen: {
                        img: ['elevenToFourteen/task4.png'],
                        labels: [
                            {label: 'Hippo', name: 'task4'},
                            {label: 'Elephant', name: 'task4'},
                            {label: 'Rooster', name: 'task4'},
                            {label: 'Rhino', name: 'task4'}
                        ],
                        correctAnswer: 'Rhino'
                    }
                }
            }
        ]
    },
    2: {
        id: '2',
        question: 'Look at the pictures and match the words with them.',
        theme: 'DragAndDropWord',
        tasks: [
            {
                id: '5',
                option: {
                    sixToTen: {
                        words: [
                            {img: 'sixToTen/task5/img1.png', word: '20'},
                            {img: 'sixToTen/task5/img2.png', word: '11'},
                            {img: 'sixToTen/task5/img3.png', word: '5'},
                            {img: 'sixToTen/task5/img4.png', word: '8'},
                            {img: 'sixToTen/task5/img5.png', word: '13'},
                            {img: 'sixToTen/task5/img6.png', word: '7'}
                        ],
                        correctAnswer: ['5', '7', '8', '13', '11', '20']
                    },
                    elevenToFourteen: {
                        words: [
                            {img: 'elevenToFourteen/task5/img1.png', word: 'Scar'},
                            {img: 'elevenToFourteen/task5/img2.png', word: 'Tall'},
                            {img: 'elevenToFourteen/task5/img3.png', word: 'Wrinkles'},
                            {img: 'elevenToFourteen/task5/img4.png', word: 'Curly hair'},
                            {img: 'elevenToFourteen/task5/img5.png', word: 'Fair hair'},
                            {img: 'elevenToFourteen/task5/img6.png', word: 'Moustache'}
                        ],
                        correctAnswer: [
                            'Wrinkles',
                            'Curly hair',
                            'Scar',
                            'Moustache',
                            'Tall',
                            'Fair hair'
                        ]
                    }
                }
            },
            {
                id: '6',
                option: {
                    sixToTen: {
                        words: [
                            {img: 'sixToTen/task6/img1.png', word: 'To get dressed'},
                            {img: 'sixToTen/task6/img2.png', word: 'To watch TV'},
                            {img: 'sixToTen/task6/img3.png', word: 'To sleep'},
                            {img: 'sixToTen/task6/img4.png', word: 'To have dinner'},
                            {img: 'sixToTen/task6/img5.png', word: 'To brush teeth'},
                            {img: 'sixToTen/task6/img6.png', word: 'To go to school'}
                        ],
                        correctAnswer: [
                            'To sleep',
                            'To get dressed',
                            'To have dinner',
                            'To brush teeth',
                            'To go to school',
                            'To watch TV'
                        ]
                    },
                    elevenToFourteen: {
                        words: [
                            {img: 'elevenToFourteen/task6/img1.png', word: 'Emissions'},
                            {img: 'elevenToFourteen/task6/img2.png', word: 'Drought'},
                            {img: 'elevenToFourteen/task6/img3.png', word: 'Hail'},
                            {img: 'elevenToFourteen/task6/img4.png', word: 'Weather forecast'},
                            {img: 'elevenToFourteen/task6/img5.png', word: 'Tornado'},
                            {img: 'elevenToFourteen/task6/img6.png', word: 'Ice'}
                        ],
                        correctAnswer: [
                            'Tornado',
                            'Hail',
                            'Ice',
                            'Emissions',
                            'Drought',
                            'Weather forecast'
                        ]
                    }
                }
            }
        ]
    },
    3: {
        id: '3',
        question: 'Look at the sentences and choose the best answer.',
        theme: 'ChooseOne',
        tasks: [
            {
                id: '7',
                option: {
                    sixToTen: {
                        questions: [
                            {
                                text: 'Hello! My name is Vicky. What’s your name?',
                                labels: [
                                    {label: 'Hi, I am Natalie.', name: 'task7-0'},
                                    {label: 'How are you?', name: 'task7-0'},
                                    {label: 'Goodbye.', name: 'task7-0'}
                                ],
                                correctAnswer: 'Hi, I am Natalie.'
                            },
                            {
                                text: 'Hello, Andy! How are you?',
                                labels: [
                                    {label: 'Hello, are you OK today?', name: 'task7-1'},
                                    {label: 'Nice to meet you!', name: 'task7-1'},
                                    {label: 'Hi, I am fine, and you?', name: 'task7-1'}
                                ],
                                correctAnswer: 'Hi, I am fine, and you?'
                            },
                            {
                                text: 'Goodbye, Alice!',
                                labels: [
                                    {label: 'Nice to meet you!', name: 'task7-2'},
                                    {label: 'Bye, have a nice day!', name: 'task7-2'},
                                    {label: 'How are you?', name: 'task7-2'}
                                ],
                                correctAnswer: 'Bye, have a nice day!'
                            },
                            {
                                text: 'I’m seven. How old are you?',
                                labels: [
                                    {label: 'I’m fine, thanks.', name: 'task7-3'},
                                    {label: 'I’m nine.', name: 'task7-3'},
                                    {label: 'I live in London.', name: 'task7-3'}
                                ],
                                correctAnswer: 'I’m nine.'
                            }
                        ]
                    },
                    elevenToFourteen: {
                        questions: [
                            {
                                text: 'Morning, Patrick.',
                                labels: [
                                    {label: 'It’s evening already.', name: 'task7-0'},
                                    {label: 'Bye, Mary.', name: 'task7-0'},
                                    {label: 'Good morning.', name: 'task7-0'}
                                ],
                                correctAnswer: 'Good morning.'
                            },
                            {
                                text: 'Have a nice day.',
                                labels: [
                                    {label: 'Thanks, you too.', name: 'task7-1'},
                                    {label: 'You are welcome.', name: 'task7-1'},
                                    {label: 'Nice to meet you.', name: 'task7-1'}
                                ],
                                correctAnswer: 'Thanks, you too.'
                            },
                            {
                                text: 'My name’s Ella Montgomery.',
                                labels: [
                                    {label: 'See you later.', name: 'task7-2'},
                                    {label: 'What’s your name?', name: 'task7-2'},
                                    {label: 'How do you spell that?', name: 'task7-2'}
                                ],
                                correctAnswer: 'How do you spell that?'
                            },
                            {
                                text: 'Are you here on holiday?',
                                labels: [
                                    {label: 'No, I’m here on holiday.', name: 'task7-3'},
                                    {label: 'I’m here to study.', name: 'task7-3'},
                                    {label: 'Yes, I’m here on business.', name: 'task7-3'}
                                ],
                                correctAnswer: 'I’m here to study.'
                            },
                            {
                                text: 'Meet my friend Sam.',
                                labels: [
                                    {label: 'Have a nice day.', name: 'task7-4'},
                                    {label: 'Hey, nice to meet you.', name: 'task7-4'},
                                    {label: 'I’m OK, and you?', name: 'task7-4'}
                                ],
                                correctAnswer: 'Hey, nice to meet you.'
                            },
                            {
                                text: 'Goodbye, Alice! See you tomorrow. ',
                                labels: [
                                    {label: 'Hello! How are you?', name: 'task7-5'},
                                    {label: 'Bye, have a nice day!', name: 'task7-5'},
                                    {label: 'I’m fine, thanks.', name: 'task7-5'}
                                ],
                                correctAnswer: 'Bye, have a nice day!'
                            }
                        ]
                    }
                }
            }
        ]
    },
    4: {
        id: '4',
        question: 'Look at the sentences and choose the best answer.',
        theme: 'ChooseOne',
        tasks: [
            {
                id: '8',
                option: {
                    sixToTen: {
                        questions: [
                            {
                                text: 'I ___ from America.',
                                labels: [
                                    {label: 'am', name: 'task8-0'},
                                    {label: 'is', name: 'task8-0'},
                                    {label: 'are', name: 'task8-0'}
                                ],
                                correctAnswer: 'am'
                            },
                            {
                                text: 'We ___ sisters.',
                                labels: [
                                    {label: 'am', name: 'task8-1'},
                                    {label: 'is', name: 'task8-1'},
                                    {label: 'are', name: 'task8-1'}
                                ],
                                correctAnswer: 'are'
                            },
                            {
                                text: 'There ___ 3 rooms in our flat.',
                                labels: [
                                    {label: 'am', name: 'task8-2'},
                                    {label: 'is', name: 'task8-2'},
                                    {label: 'are', name: 'task8-2'}
                                ],
                                correctAnswer: 'are'
                            },
                            {
                                text: 'There ___ a teddy under the table.',
                                labels: [
                                    {label: 'am', name: 'task8-3'},
                                    {label: 'is', name: 'task8-3'},
                                    {label: 'are', name: 'task8-3'}
                                ],
                                correctAnswer: 'is'
                            }
                        ]
                    },
                    elevenToFourteen: {
                        questions: [
                            {
                                text: '___ African animals can live in zoos.',
                                labels: [
                                    {label: 'Some', name: 'task8-0'},
                                    {label: 'Any', name: 'task8-0'},
                                    {label: 'Much', name: 'task8-0'}
                                ],
                                correctAnswer: 'Some'
                            },
                            {
                                text: 'Tim can’t cook ___ sandwiches.',
                                labels: [
                                    {label: 'some', name: 'task8-1'},
                                    {label: 'any', name: 'task8-1'},
                                    {label: 'a little', name: 'task8-1'}
                                ],
                                correctAnswer: 'any'
                            },
                            {
                                text: 'There are ___ desserts in this bakery.',
                                labels: [
                                    {label: 'much', name: 'task8-2'},
                                    {label: 'many', name: 'task8-2'},
                                    {label: 'any', name: 'task8-2'}
                                ],
                                correctAnswer: 'many'
                            },
                            {
                                text: 'You put too ___ honey in the pie.',
                                labels: [
                                    {label: 'much', name: 'task8-3'},
                                    {label: 'many', name: 'task8-3'},
                                    {label: 'a few', name: 'task8-3'}
                                ],
                                correctAnswer: 'much'
                            },
                            {
                                text: 'We have ___ milk left in the fridge.',
                                labels: [
                                    {label: 'a few', name: 'task8-4'},
                                    {label: 'a little', name: 'task8-4'},
                                    {label: 'any', name: 'task8-4'}
                                ],
                                correctAnswer: 'a little'
                            },
                            {
                                text: 'There are ___ crayons in my backpack.',
                                labels: [
                                    {label: 'a few', name: 'task8-5'},
                                    {label: 'a little', name: 'task8-5'},
                                    {label: 'much', name: 'task8-5'}
                                ],
                                correctAnswer: 'a few'
                            }
                        ]
                    }
                }
            }
        ]
    },
    5: {
        id: '5',
        question: 'Look at the sentences and choose the best answer.',
        theme: 'ChooseOne',
        tasks: [
            {
                id: '9',
                option: {
                    sixToTen: {
                        questions: [
                            {
                                text: 'He ___ a dog.',
                                labels: [
                                    {label: 'has', name: 'task9-0'},
                                    {label: 'have', name: 'task9-0'}
                                ],
                                correctAnswer: 'has'
                            },
                            {
                                text: 'We ___ got yellow bikes.',
                                labels: [
                                    {label: 'has', name: 'task9-1'},
                                    {label: 'have', name: 'task9-1'}
                                ],
                                correctAnswer: 'have'
                            },
                            {
                                text: 'A wolf ___ a tail.',
                                labels: [
                                    {label: 'has', name: 'task9-2'},
                                    {label: 'have', name: 'task9-2'}
                                ],
                                correctAnswer: 'has'
                            },
                            {
                                text: 'I ___ got a computer.',
                                labels: [
                                    {label: 'has', name: 'task9-3'},
                                    {label: 'have', name: 'task9-3'}
                                ],
                                correctAnswer: 'have'
                            }
                        ]
                    },
                    elevenToFourteen: {
                        questions: [
                            {
                                text: 'They go to the hospital ___ .',
                                labels: [
                                    {label: 'every month', name: 'task9-0'},
                                    {label: 'last month', name: 'task9-0'}
                                ],
                                correctAnswer: 'every month'
                            },
                            {
                                text: 'Shh! She is talking on the phone ___ .',
                                labels: [
                                    {label: 'always', name: 'task9-1'},
                                    {label: 'now', name: 'task9-1'}
                                ],
                                correctAnswer: 'now'
                            },
                            {
                                text: 'We ___ walk in this park. It’s very dirty!',
                                labels: [
                                    {label: 'never', name: 'task9-2'},
                                    {label: 'always', name: 'task9-2'}
                                ],
                                correctAnswer: 'never'
                            },
                            {
                                text: 'What was Harry doing ___ ?',
                                labels: [
                                    {label: 'last morning', name: 'task9-3'},
                                    {label: 'at the moment', name: 'task9-3'}
                                ],
                                correctAnswer: 'last morning'
                            },
                            {
                                text: 'I really enjoy how they cook in this cafe. That’s why I ___ have dinners here.',
                                labels: [
                                    {label: 'seldom', name: 'task9-4'},
                                    {label: 'usually', name: 'task9-4'}
                                ],
                                correctAnswer: 'usually'
                            },
                            {
                                text: 'Susie was late ___ !',
                                labels: [
                                    {label: 'every week', name: 'task9-5'},
                                    {label: 'yesterday', name: 'task9-5'}
                                ],
                                correctAnswer: 'yesterday'
                            }
                        ]
                    }
                }
            }
        ]
    },
    6: {
        id: '6',
        question: 'Put the words in the correct order to make sentences.',
        theme: 'InputSentence',
        tasks: [
            {
                id: '10',
                option: {
                    sixToTen: {
                        questions: [
                            {
                                text: 'hot / is / It',
                                inputs: ['', '', ''],
                                correctAnswer: 'It / is / hot'
                            },
                            {
                                text: 'trees / The / green / are',
                                inputs: ['', '', '', ''],
                                correctAnswer: 'The / trees / are / green'
                            },
                            {
                                text: 'is / small / room / My',
                                inputs: ['', '', '', ''],
                                correctAnswer: 'My / room / is / small'
                            },
                            {
                                text: 'are / the / toys / There / under / chair',
                                inputs: ['', '', '', '', '', ''],
                                correctAnswer: 'There / are / toys / under / the / chair'
                            }
                        ]
                    },
                    elevenToFourteen: {
                        questions: [
                            {
                                text: 'is / This book / that book / as / as interesting',
                                inputs: ['', '', '', '', ''],
                                correctAnswer: 'This book / is / as interesting / as / that book'
                            },
                            {
                                text: 'the / Ben / in / tallest / is / the class / boy',
                                inputs: ['', '', '', '', '', '', ''],
                                correctAnswer: 'Ben / is / the / tallest / boy / in / the class'
                            },
                            {
                                text: 'such / She / girl / a / is / lovely',
                                inputs: ['', '', '', '', '', ''],
                                correctAnswer: 'She / is / such / a / lovely / girl'
                            },
                            {
                                text: 'me / salty / too / is / The soup / for',
                                inputs: ['', '', '', '', '', ''],
                                correctAnswer: 'The soup / is / too / salty / for / me'
                            },
                            {
                                text: 'a / because / friend / is / Mary / like / I / she / good',
                                inputs: ['', '', '', '', '', '', '', '', ''],
                                correctAnswer: 'I / like / Mary / because / she / is / a / good / friend'
                            },
                            {
                                text: 'a / happy / will / She / give / if / you / be / present / her',
                                inputs: ['', '', '', '', '', '', '', '', '', ''],
                                correctAnswer: 'She / will / be / happy / if / you / give / her / a / present'
                            }
                        ]
                    }
                }
            }
        ]
    },
    7: {
        id: '7',
        question: 'Look at the picture, read the sentence and choose true or false.',
        theme: 'TrueOrFalse',
        tasks: [
            {
                id: '11',
                option: {
                    sixToTen: {
                        img: ['sixToTen/task11.png'],
                        questions: [
                            {
                                text: 'I can run here.',
                                labels: [
                                    {label: 'False', name: 'task11-0'},
                                    {label: 'True', name: 'task11-0'}
                                ],
                                correctAnswer: 'False'
                            },
                            {
                                text: 'I can’t walk very fast here.',
                                labels: [
                                    {label: 'True', name: 'task11-1'},
                                    {label: 'False', name: 'task11-1'}
                                ],
                                correctAnswer: 'True'
                            }
                        ]
                    },
                    elevenToFourteen: {
                        img: ['elevenToFourteen/task11.png'],
                        questions: [
                            {
                                text: 'I shouldn’t clean after my pet.',
                                labels: [
                                    {label: 'True', name: 'task11-0'},
                                    {label: 'False', name: 'task11-0'}
                                ],
                                correctAnswer: 'False'
                            },
                            {
                                text: 'I can play with my pet here.',
                                labels: [
                                    {label: 'True', name: 'task11-1'},
                                    {label: 'False', name: 'task11-1'}
                                ],
                                correctAnswer: 'True'
                            }
                        ]
                    }
                }
            },
            {
                id: '12',
                option: {
                    sixToTen: {
                        img: ['sixToTen/task12.png'],
                        questions: [
                            {
                                text: 'The shop is closed.',
                                labels: [
                                    {label: 'True', name: 'task12-0'},
                                    {label: 'False', name: 'task12-0'}
                                ],
                                correctAnswer: 'False'
                            },
                            {
                                text: 'The shop is always open.',
                                labels: [
                                    {label: 'True', name: 'task12-1'},
                                    {label: 'False', name: 'task12-1'}
                                ],
                                correctAnswer: 'True'
                            }
                        ]
                    },
                    elevenToFourteen: {
                        img: ['elevenToFourteen/task12.png'],
                        questions: [
                            {
                                text: 'I can get on a bus from here.',
                                labels: [
                                    {label: 'True', name: 'task12-0'},
                                    {label: 'False', name: 'task12-0'}
                                ],
                                correctAnswer: 'False'
                            },
                            {
                                text: 'I can get on a bus on George Street.',
                                labels: [
                                    {label: 'True', name: 'task12-1'},
                                    {label: 'False', name: 'task12-1'}
                                ],
                                correctAnswer: 'True'
                            }
                        ]
                    }
                }
            }
        ]
    },
    8: {
        id: '8',
        question: 'Read the text and choose the best answer.',
        theme: 'ReadText',
        tasks: [
            {
                id: '13',
                option: {
                    sixToTen: {
                        text: ['There are four of us in our family – my parents, my brother, and I. My mum likes reading and my dad likes playing chess with my brother Ken. My mother has long red hair and big brown eyes. My father is tall and handsome, he has short dark hair and grey eyes. We love each other and always try to spend more time together.'],
                        questions: [
                            {
                                text: 'The members of the family are:',
                                labels: [
                                    {label: 'Mother, father, brother, I', name: 'task13-0'},
                                    {label: 'Mother, sister, father, I', name: 'task13-0'},
                                    {label: 'Grandfather, grandmother, brother, I', name: 'task13-0'}
                                ],
                                correctAnswer: 'Mother, father, brother, I'
                            },
                            {
                                text: 'Ken is my:',
                                labels: [
                                    {label: 'Mother', name: 'task13-1'},
                                    {label: 'Father', name: 'task13-1'},
                                    {label: 'Brother', name: 'task13-1'}
                                ],
                                correctAnswer: 'Brother'
                            },
                            {
                                text: 'My father likes:',
                                labels: [
                                    {label: 'Swimming', name: 'task13-2'},
                                    {label: 'Playing chess', name: 'task13-2'},
                                    {label: 'Reading', name: 'task13-2'}
                                ],
                                correctAnswer: 'Playing chess'
                            }
                        ]
                    },
                    elevenToFourteen: {
                        text: ['Because I have some free time during summer I decided to find a job. Now I am a professional ‘mystery shopper’. Firstly, this job is very interesting. It is like being an actor or a spy - you need to pretend to be a ‘customer’ to check the service. Also, it is a useful and important job. The boss wants to know if the shop assistants are doing a good job or to compare shops.', 'However, it can be difficult sometimes because you have to say bad things about somebody in a report and they can lose their job. Finally, I am quite an outgoing person so this job is not difficult for me. I can earn money and do something interesting in summer.'],
                        questions: [
                            {
                                text: 'The author decided to find a job because:',
                                labels: [
                                    {label: 'he needed money', name: 'task13-0'},
                                    {label: 'he had some free time', name: 'task13-0'},
                                    {label: 'he wanted to be an actor', name: 'task13-0'}
                                ],
                                correctAnswer: 'he had some free time'
                            },
                            {
                                text: 'The author thinks that the job as a mystery shopper has:',
                                labels: [
                                    {label: 'only good sides', name: 'task13-1'},
                                    {label: 'only bad sides', name: 'task13-1'},
                                    {label: 'both good and bad sides', name: 'task13-1'}
                                ],
                                correctAnswer: 'both good and bad sides'
                            },
                            {
                                text: 'The main idea of the text is:',
                                labels: [
                                    {label: 'to share the working experience', name: 'task13-2'},
                                    {label: 'to explain how to earn money', name: 'task13-2'},
                                    {label: 'to tell about professions', name: 'task13-2'}
                                ],
                                correctAnswer: 'to share the working experience'
                            }
                        ]
                    }
                }
            }
        ]
    },
    9: {
        id: '9',
        question: 'Listen to the recording and choose the best answer.',
        theme: 'ListenAndChoose',
        tasks: [
            {
                id: '14',
                option: {
                    sixToTen: {
                        labels: [
                            {label: 'green, blue and red circles', name: 'task14', img: 'task14/img1.png'},
                            {label: 'yellow triangle', name: 'task14', img: 'task14/img2.png'},
                            {label: 'yellow circle', name: 'task14', img: 'task14/img3.png'},
                            {label: 'purple circle', name: 'task14', img: 'task14/img4.png'}
                        ],
                        correctAnswer: 'yellow circle'
                    },
                    elevenToFourteen: {
                        question: 'You will hear a woman talking to her friend about why she’s bought a motorbike. Why did she buy it?',
                        labels: [
                            {label: 'It’s fast', name: 'task14'},
                            {label: 'It was cheap', name: 'task14'},
                            {label: 'It’ll be easy to repair', name: 'task14'}
                        ],
                        correctAnswer: 'It’s fast'
                    }
                }
            },
            {
                id: '15',
                option: {
                    sixToTen: {
                        labels: [
                            {label: 'red stars', name: 'task15', img: 'task15/img1.png'},
                            {label: 'blue square', name: 'task15', img: 'task15/img2.png'},
                            {label: 'yellow star', name: 'task15', img: 'task15/img3.png'},
                            {label: 'purple and blue stars', name: 'task15', img: 'task15/img4.png'}
                        ],
                        correctAnswer: 'red stars'
                    },
                    elevenToFourteen: {
                        question: 'You will hear two friends talking about going to University. What subject is the man going to study?',
                        labels: [
                            {label: 'History', name: 'task15'},
                            {label: 'Geography', name: 'task15'},
                            {label: 'Chemistry', name: 'task15'}
                        ],
                        correctAnswer: 'Geography'
                    }
                }
            }
        ]
    }
};