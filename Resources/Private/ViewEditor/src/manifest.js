import manifest from "@neos-project/neos-ui-extensibility";
import ViewEditor from "./ViewEditor";

manifest('NeosRulez.Neos:ViewEditor', {}, (globalRegistry) => {
    const editorsRegistry = globalRegistry.get('inspector').get('editors');

    editorsRegistry.set('NeosRulez/Neos/Inspector/Editors/ViewEditor', {
        component: ViewEditor,
    });
});
