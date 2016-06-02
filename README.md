[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Air Traffic Control Challenge

## Prerequisites

-   [ga-wdi-boston/js-objects-stack-challenge](https://github.com/ga-wdi-boston/js-objects-stack-challenge)

## Instructions

1.  Fork and clone this repository.
1.  Change into the new directory.
1.  Create and checkout a new branch to work on.
1.  Fulfill the listed requirements.

## Requirements

A software subsystem of an air-traffic control system is defined to manage a
queue of aircraft (AC) in an airport. The aircraft queue is managed by a
process which responds to three types of requests:

  - System boot used to start the system.
  - Enqueue aircraft used to insert a new AC into the system.
  - Dequeue aircraft used to remove an AC from the system.

AC have at least (but are not limited to having) the following properties:

  - AC type: Passenger or Cargo.
  - AC size: Small or Large.

The process which manages the queue of AC satisfies the following:

  - There is no limit on the number of AC it can manage.
  - Dequeue aircraft requests result in selection of one AC for removal such
    that:
  - Passenger AC have removal precedence over Cargo AC.
  - Large AC of a given type have removal precedence over Small AC of the
      same type.
  - Earlier enqueued AC of a given type and size have precedence over later
      enqueued AC of the same type and size.

## [License](LICENSE)

Source code distributed under the MIT license. Text and other assets copyright
General Assembly, Inc., all rights reserved.
