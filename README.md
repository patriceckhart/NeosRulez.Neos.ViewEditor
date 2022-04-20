# An editor to implement a Neos Flow controller view

![Preview](https://raw.githubusercontent.com/patriceckhart/NeosRulez.Neos.ViewEditor/master/Preview.png)

## Installation

The NeosRulez.Neos.ViewEditor package is listed on packagist (https://packagist.org/packages/neosrulez/neos-vieweditor) - therefore you don't have to include the package in your "repositories" entry any more.

Just run:

```
composer require neosrulez/neos-vieweditor
```

## Configuration

NodeTypes.yaml
```yaml
'Acme.Site:Document.Page':
  properties:
    foo:
      ui:
        label: View
        inspector:
          group: content
          editor: NeosRulez/Neos/Inspector/Editors/ViewEditor
          editorOptions:
            configuration:
              id: 'fooView'
              route: '/view/foo'
```

PHP

```php
    /**
     * @return void
     */
    public function indexAction()
    {
        $this->view->assign('foo', 'bar');
        $this->view->assign('randomNumber', rand(5, 10));
    }
```

Fusion (afx)

```neosfusion
Acme.Site.FooController.index = Neos.Fusion:Component {

    renderer = afx`
        <div style="border:1px solid red;padding:10px">
            <button>Test: {foo}</button>
            <p>Random Number: {randomNumber}</p>
            <strong>foo bar</strong>
        </div>
    `
}
```

## Author

* E-Mail: mail@patriceckhart.com
* URL: http://www.patriceckhart.com
