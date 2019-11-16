# 1.problem : Disemvowel Trolls

## explaination
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

example

input : This website is for losers LOL!
output : Ths wbst s fr lsrs LL!

1. understand
    - get rid of every vowel from one String various
    - input is String value
2. plan
    - use filter method
    - thinks what kinds of vowel are.
3. execute
4. apply
    - it was not familliar to use reduce and map.
    - praticed how to use operation '?' .
    - I will often use '?'
    - recognize what I am doing


other solution.

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
