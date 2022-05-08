import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class GroupedTocComponent extends Component {
  @service store;

  get groupedModel() {
    let result = [];
    const noStage = {
      links: [],
    };

    for (let key in this.args.model.stageLinks) {
      let stageLinks = this.args.model.stageLinks;
      let stage = this.store.peekRecord('stage', key);
      if (!stage) {
        noStage.links = [...noStage.links, ...stageLinks[key]];
      } else {
        result.push({
          stage,
          links: stageLinks[key],
        });
      }
    }

    result.sort((a, b) => a.stage.order - b.stage.order);

    // add links with no stage or an invalid stage after the sorted list
    result.push(noStage);

    return result;
  }
}
