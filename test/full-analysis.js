
var compendium = require('../dist/compendium.minimal.js');

exports['Joe Carter went to the Toronto International Film Festival to go see Inception.'] = function(test) {
    var expectedPoS = [
            ('NNP NNP VBD TO DT NNP NNP NNP NNP TO VB VB NNP .').split(' ')
        ],
        analysis = compendium.analyse('Joe Carter went to the Toronto International Film Festival to go see Inception.')[0];

    // Check tokenization + PoS
    test.equal(analysis.length, 14);
    test.deepEqual([analysis.tags], expectedPoS);
    
    // Check token flags
    test.equal(analysis.tokens[1].attr.is_verb, false);
    test.equal(analysis.tokens[1].attr.is_noun, true);

    test.equal(analysis.tokens[2].attr.is_verb, true);
    test.equal(analysis.tokens[2].attr.is_noun, false);
    test.equal(analysis.tokens[2].attr.infinitive, 'go');

    test.equal(analysis.tokens[3].attr.is_verb, false);

    test.equal(analysis.tokens[5].norm, 'toronto');
    test.equal(analysis.tokens[5].attr.is_noun, true);

    // Check profiling
    test.equal(analysis.profile.negated, false);
    test.equal(analysis.profile.label, 'neutral');
    test.equal(analysis.profile.politeness, 0);
    test.equal(analysis.profile.dirtiness, 0);
    
    // Check entity details
    test.equal(analysis.entities.length, 3);
    test.equal(analysis.entities[0].raw, 'Joe Carter');
    test.equal(analysis.entities[0].fromIndex, 0);
    test.equal(analysis.entities[0].toIndex, 1);
    test.equal(analysis.tokens[0].attr.entity,  0);
    test.equal(analysis.tokens[1].attr.entity,  0);

    test.equal(analysis.entities[1].raw, 'Toronto International Film Festival');
    test.equal(analysis.entities[1].fromIndex, 5);
    test.equal(analysis.entities[1].toIndex, 8);
    test.equal(analysis.tokens[5].attr.entity, 1);
    test.equal(analysis.tokens[6].attr.entity,  1);
    test.equal(analysis.tokens[7].attr.entity,  1);
    test.equal(analysis.tokens[8].attr.entity, 1);

    test.equal(analysis.entities[2].raw, 'Inception');
    test.equal(analysis.entities[2].fromIndex, 12);
    test.equal(analysis.entities[2].toIndex, 12);
    test.equal(analysis.tokens[12].attr.entity, 2);

    // Check dependency parsing
    // Joe
    test.equal(analysis.tokens[0].deps.master, 1, '`Joe` should have `Carter` as master');
    test.equal(analysis.tokens[0].deps.type, 'compound', '`Joe` should be `compound`');
    // Carter
    test.equal(analysis.tokens[1].deps.master, 2, '`Carter` should have `went` as master');
    test.equal(analysis.tokens[1].deps.type, 'subj', '`Carter` should be `subj`');
    // went
    test.equal(analysis.governor, 2, 'Sentence governor should be `went`');
    test.equal(analysis.tokens[2].deps.master, null, '`went` should be governor');
    test.equal(analysis.tokens[2].deps.governor, true, '`went` should be governor');
    // to the
    test.equal(analysis.tokens[3].deps.master, 2, '`to` should have `went` as master');
    test.equal(analysis.tokens[4].deps.master, 8, '`the` should have `Festival` as master');
    // Toronto International Film Festival
    test.equal(analysis.tokens[5].deps.master, 8, '`Toronto` should have `Festival` as master');
    test.equal(analysis.tokens[5].deps.type, 'compound', '`Toronto` should be `compound`');
    test.equal(analysis.tokens[6].deps.master, 8, '`International` should have `Festival` as master');
    test.equal(analysis.tokens[6].deps.type, 'compound', '`International` should be `compound`');
    test.equal(analysis.tokens[7].deps.master, 8, '`Film` should have `Festival` as master');
    test.equal(analysis.tokens[7].deps.type, 'compound', '`Film` should be `compound`');
    test.equal(analysis.tokens[8].deps.master, 2, '`Festival` should have `went` as master');

    test.equal(analysis.tokens[9].deps.master, 10, '`to` should have `go` as master');
    test.equal(analysis.tokens[10].deps.master, 2, '`go` should have `went` as master');
    test.equal(analysis.tokens[11].deps.master, 10, '`see` should have `go` as master');

    // Inception
    test.equal(analysis.tokens[12].deps.master, 11, '`Inception` should have `see` as master');
    test.equal(analysis.tokens[12].deps.type, 'obj', '`Inception` should be `obj`');


    test.done();
};
