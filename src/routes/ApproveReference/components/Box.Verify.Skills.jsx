import React from 'react'
import Box from '../../../components/Box';
import { patch } from '../../../api';

export default class BoxVerifySkills extends React.Component {

    constructor(props) {
        super(props)
        this.onNext = this.onNext.bind(this)
        this.toggleSkill = this.toggleSkill.bind(this);
        this.pushSkillsAndAbilities = this.pushSkillsAndAbilities.bind(this);

        this.state = {
            skills: props.reference.skills,
            abilities: props.reference.abilities
        }
    }

    onNext() {
        this.pushSkillsAndAbilities();
        this.props.onNext();
    }

    pushSkillsAndAbilities() {
        patch(`api/references/${this.props.reference.id}`, { skills: this.state.skills });
        patch(`api/references/${this.props.reference.id}`, { abilities: this.state.abilities })
    }


    boxie(id, thingy, skillOrAbility, classes) {
        const classStuff = `checkie ${classes}`;
        return (
            <p className={classStuff} key={id}>
                <label>
                    <input type="checkbox" defaultChecked={this.state[skillOrAbility][thingy]} onChange={this.toggleSkill} value={thingy} id={skillOrAbility} />
                    <span>{thingy}</span>
                </label>
            </p>
        )
    }

    toggleSkill({ target }) {
        let state = this.state[target.id][target.value];
        this.setState({
            [target.id]: {
                ...this.state[target.id],
                [target.value]: !state
            }
        })
    }

    render() {
        const { onBackward } = this.props;

        let skillboxes = [];
        let abilityboxes = [];
        let idx = 0;
        for (const skill in this.state.skills) {
            skillboxes.push(this.boxie(idx, skill, "skills", "col s5"));
            idx++;
        }
        for (const ability in this.state.abilities) {
            abilityboxes.push(this.boxie(idx, ability, "abilities", "col s12"));
            idx++;
        }

        return (
            <Box
                title={"Can you verify these skills and abilities?"}
                content={
                    <div>
                        <div className="row">
                            <div className="col s10 offset-s1 subtitle">
                                Choose the ones you'd like to endorse.
                            </div>
                        </div>
                        <div className="row">
                            <form>
                                <div className="col s6 offset-s1">
                                    <label>Skills</label>
                                    <div className="checkiContainer">
                                        {skillboxes}
                                    </div>
                                </div>
                                <div className="col s3">
                                    <label>Abilities</label>
                                    <div>
                                        {abilityboxes}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                }
                onBackward={this.props.onBackward}
                onContinue={this.onNext}
            />
        );
    }
}