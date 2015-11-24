#System
## Getting Started

`npm install`

if not working try

`npm install -ionic@alpha -cordova`

### Starting Server and App Local

`ionic serve` in the main folder.


#### Updating Ionic
When you start your project with `ionic start`, the latest version of `ionic-framework` is installed automatically. To update your ionic version in an existing project, run `npm install ionic-framework`. This will install the latest version of `ionic-framework` published to npm.


# Trainings

## Set Typs
Different types of sets provide every trainingtyp. The view of TrainingTaskDetail depends on the set typ.

### StandardSet
In Standardsets the training is divided in certain amount of sets. All sets have the same repeats and weight.

### PyramideSet
In a PyramideSet one set the weight varys. You start with a defined amount of weight and everytime you can't do any more repeats with the weight you low the weight. You continue until you reached the lowest weight. So in the app only the startingweight is written down. The repeats doesn't matter.

### DAMAYC
DAMAYC or "Do as much as you can" defines a set with a certain weight. You write down the amount of sets, the weight and the repeats you reach. But you won't save a given amount of repeats.

### LowestSet
In LowestSets you try to reach a certain amount of repeats with a given weight in as less sets as you can. e.g. you have to reach 50 repeats with a weight of 40. You succeed in: 10 | 10 | 10 | 9 | 8 | 3.
