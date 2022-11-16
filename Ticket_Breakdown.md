# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

I have not created all possible tickets for this problem, but I have created a few that came to mind. It may require more or less work, but given that this is just an exercise I wanted to give enough examples to show that I understand the problem thoroughly.

Story points are assigned according to the perceived 'effort' of the developer. A ticket can be pointed with the following values from 'least effort' to 'most effort': 1, 2, 3, 5, 8, 13, 25. (modified Fibonacci)

Assumptions about system design: Some flavor of SQL on the DB. `id` column on `Agent` and `Facility` table is a VARCHAR.

### Ticket 1
##### Create `AgentMappings` table
**Story points**: 2
**Description:**
Create a new table with the name `AgentMappings`. This table will store custom agent IDs that are assigned to each agent by a given facility.

Rows:
`UUID id`
internal ID used to keep rows unique. Not the agent ID or the custom ID.

`VARCHAR customId`
custom ID assigned by facility to the agent. Remember, two facilities might assign **identical IDs** to two different agents and we don't want to prohibit this.

`VARCHAR agentId`
existing internal agent ID.

`VARCHAR facilityId`
existing internal facility ID.

### Ticket 2
##### Create lookup query to get internal agent ID from custom agent ID
**Story points**: 3
**Description:**
**Related to:** Ticket 1
We want to be able to look up the internal agent ID for an agent, given their custom ID and the facility ID. Write a SQL query to do this.

### Ticket 3
##### Create API endpoint using agent lookup query
**Story points**: 5
**Description:**
Using the SQL lookup for getting an internal agent ID from their custom ID and the facility ID, build out an API endpoint so that facilities can look up agents by their custom IDs in the frontend.

### Ticket 4
##### Build out custom agent lookup on frontend
**Story points**: 5
**Description:**
**Related to:** Ticket 3
Using the API endpoint for getting an internal agent ID from their custom ID and the facility ID, build out the frontend so that facilities can lookup agents by their custom IDs.