(function() {
    'use strict';

    angular
        .module('app')
        .controller('HeaderController', HeaderController)
        .controller('HomeController', HomeController);

    function HeaderController(){
        var vm = this;
        this.user = {
            username: '',
            password: ''
        }
    }

    function HomeController($window) {
        var vm = this;

        this.addRow = addRow;

        function addRow() {
            this.sampleData.unshift({
                type: '',
                extdesc: '',
                description: '',
                amount: '',
                differed: '',
                date: '',
                isEdit: true

            });
            console.log(this.sampleData);
        }
        this.columnData = [{
            "id": "topic",
            "name": "Topic",
            "inputType": "text"
        }, {
            "id": "description",
            "name": "Description",
            "inputType": "textarea"
        }, {
            "id": "speaker",
            "name": "Speaker",
            "inputType": "text"
        }, {
            "id": "attendies",
            "name": "Attendies",
            "inputType": "number"
        }, {
            "id": "price",
            "name": "Price",
            "inputType": "text"
        }, {
            "id": "date",
            "name": "Date",
            "inputType": "date"
        },{
            "id": "webinar",
            "name": "Webinar",
            "inputType": "select",
            "items": ["GoToWebinar", "Cisco WebEx", "ClickWebinar"]
        },];

        this.sampleData = [{
            id: 1,
            topic: 'Android Development',
            description: 'Step by Step Android development for Beginners',
            speaker: 'John',
            attendies: 200,
            price: 'Free',
            date: '2017-10-23',
            webinar: "GoToWebinar"
        }, {
            id: 2,
            topic: 'Amazon web Services - Basics',
            description: 'Discover what AWS can offer your business with a brief overview followed by a look at some common services to enhance your experience and utilization.',
            speaker: 'David',
            attendies: 100,
            price: '10$',
            date: '2017-09-28',
            webinar: "Cisco WebEx"
        }, {
            id: 3,
            topic: 'Exporing Dockers',
            description: 'Explore the possibilities of what Docker is, how to best fit it into your DevOps operations, and some of the potential it offers for your development environment.',
            speaker: 'Philip',
            attendies: 150,
            price: '100$',
            date: '2017-11-12',
            webinar: "ClickWebinar"
        }, {
            id: 4,
            topic: 'Blockchain for Enterprise',
            description: 'Blockchain for Enterprise, to help you learn from the best programmers and domain experts from all over the world.',
            speaker: 'Madhukar',
            attendies: 300,
            price: 'Free',
            date: '2017-10-17',
            webinar: "GoToWebinar"
        }, {
            id: 5,
            topic: 'IOT- Introduction and Use Case',
            description: 'Intro to Agile, DevOps, DevOps culture and Practices.',
            speaker: 'Vijay',
            attendies: 100,
            price: 'Free',
            date: '2017-09-30',
            webinar: "Cisco WebEx"
        }, {
            id: 6,
            topic: 'Amazon Web Services - Security and Identity',
            description: 'The AWS Essentials course is for those who are new to Amazon Web Services. You will be introduced to AWS, setting up your own AWS account, and an overview of all of the AWS services',
            speaker: 'David',
            attendies: 200,
            price: 'Free',
            date: '2017-10-10',
            webinar: "GoToWebinar"
        }, {
            id: 7,
            topic: 'Swift for IOS - Basics',
            description: ' You’ll be taught the basics of navigating the X-Code environment working with Views and Controllers, and many of the nuisances that application developers face through actually building your first iOS mobile application.',
            speaker: 'Jordan',
            attendies: 300,
            price: 'Free',
            date: '2017-11-01',
            webinar: "Cisco WebEx"
        }];
    }

})();