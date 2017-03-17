[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Air Traffic Control Challenge

## Prerequisites

-   [JavaScript Objects Stack Challenge](https://github.com/ga-wdi-boston/js-objects-stack-challenge)

## Instructions

1.  Fork and clone this repository.
1.  Change into the new directory.
1.  Install dependencies.
1.  Create and checkout a new branch to work on.
1.  Fulfill the listed requirements.

Starter code is available in [`lib/challenge.js`](lib/challenge.js). A pull
request is not required, but it is necessary if you want a code review.

You may wish to refer to [FAQs](https://github.com/ga-wdi-boston/meta/wiki/)
related to [forking,
cloning](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone).

## Requirements

A software subsystem of an air traffic control system is defined to manage a
queue of aircrafts at an airport. Write a constructor function, `ATCQueue`,
that creates an aircraft queue.

The aircraft queue is managed by a process that responds to three types of
requests:

| Request | Action |
| --- | --- |
| `aircraftCount()` | Counts the number of aircrafts in the queue. |
| `enqueue()` | Add an aircraft to the queue. |
| `dequeue()` | Remove an aircraft from the queue. |

Aircrafts have at least, but are not limited to, the following properties.

| Property | Value |
| --- | --- |
| `type` | `passenger` or `cargo` |
| `size` | `small` or `large` |

The process that manages the aircraft queue satisfies the following conditions.
-   There is no limit on the size of the aircraft queue.
-   Aircrafts are dequeued according to their priority.
    -   Passenger aircrafts have higher priority than cargo aircrafts.
    -   If two aircrafts have the same type but different sizes, then the large
        aircraft has a higher priority.
    -   If there is more than one aircraft with the same type and size, then the
        aircraft that was enqueued earlier has higher priority.

You should be running `grunt nag` before diagnosing any bugs, since it finds
some of the most common sources of errors. After `grunt nag` passes, you should
run `grunt test` to run the included tests. Tests will tell you whether of not
you've met these requirements.

## Tasks

Developers should run these often!

-   `grunt nag` or just `grunt`: runs code quality analysis tools on your code
    and complains.
-   `grunt reformat`: reformats all your code in a standard style.
-   `grunt test`: runs any automated tests; may depend on `grunt build`.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
