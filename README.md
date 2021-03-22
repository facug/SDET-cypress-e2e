# SDET-cypress-e2e
A mini framework to showcase e2e testing!

##Set up
First you'll need to install protractor and webdriver-manager globaly, you can do so with the command:

```npm install -g protractor```

Afterwards, you'll need probably need to update the webdriver-manager with the command:

```webdriver-manager update```

##Running the test case

first and foremost, you'll need to have the selenium server running! which is why we have the webdriver-manager, 
simply run:

```webdriver-manager start```

and after the server is started, you can actually run the tests. Just run the command:

```protractor conf.js```

And watch the magic happen!