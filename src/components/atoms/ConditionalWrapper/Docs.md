# ConditionalWrapper
This component is used to conditionally render a wrapper around a piece of JSX. It can be used for links. An example is provided below.


### Props
| Name          | Type                                    | Default                                                                                                     | Description                         |
| ------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------- | --------------------------------------|
| condition | boolean | false | This wrapper will display if this condition is met. 
| wrapper | ReactElement                                    | **Required** | JSX that will wrap the children. This will render if the condition is met. |
| children | ReactElement | **Required** | JSX children that will always show. |

#### Example
##### Default
```javascript
<ConditionalWrapper condition={hasBio} wrapper={(children) => <a href="https://google.com">{children}</a>}>
  <div css={!hasBio && PostCardContentLink}>
    <Image
      fallbackProfileImage={fallbackProfileImage}
      fluid={fluid}
      fullName={fullName}
    />
  </div>
</ConditionalWrapper>
```
