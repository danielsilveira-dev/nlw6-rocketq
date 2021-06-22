![Capa](./assets/Capa.svg)
# Embarcando no Front-end

## CSS - 40:22

## clamp()

- intervalo de tamanho
- tamanho minimo, tamanho padrão, tamanho máximo

```css
font-size: clamp(mínimo(14px), tamanhoPadrão(1.6rem), maximo(2w));
```

## Variáveis

Dentro do elemento **html** podemos criar variáveis!

**Por exemplo**:

```css
html {
  --black: #0D114F;
  --white: #fafafa;
  --red: #E83F5B;
  --light-blue: #e0ecff;
  --blue: #3485FF;
  --background: #FBFCFF;
  --overlay: #040911;
  --icons-details: #A5B0C1;

  --grey-dark: #4D5E77;
  --grey-blue: #A1B2CD;
  --grey-light: #E5EAF1;
}
```

## Tamanho da fonte

### REM

A estilização padrão do navegador para tamanho de fonte é `16px`.

Com a medida `rem`,  o navegador entende que `1rem` é `16px`!

Se eu quiser que o tamanho da fonte do título seja `38`?

Preciso calcular `38/16` que vai ter como resultado `2.375`!

Existe uma forma melhor de trabalhar com essa medida :

### Qual a conta?

Para o navegador, o (User Agent) por padrão utiliza 100% ou seja, (16px) ou 1.75rem!

### Como visto na aula foi feito usando regra de três:

16px 100%

10px  X = 62.5%

16x = 100 * 10

16x = 1000

x = 1000 / 16

x = 62.5

```css
html {
  --black: #0D114F;
  --white: #FAFAFA;
  --red: #E83F5B;
  --light-blue: #E0ECff;
  --blue: #3485FF; 
	--background: #FBFCFF;
  --overlay: #040911;
  --icons-details: #A5B0C1;

  --grey-dark: #4D5E77;
  --grey-blue: #A1B2CD;
  --grey-light: #E5EAF1;

  font-size: 62.5%;
}
```

Ou seja, agora o padrão que definimos para o elemento `html` ficou `62.5%` e não mais `100%`!

A cada `1rem` agora significa `10px`! Isso aí! E a cada `1px` é `.1rem`! 

Ou seja, `28px` é `2.8rem`!

Isso é a melhor escolha para você que não gosta de ficar puxando a calculadora!

## Reset

- **Zera** os atributos de CSS;

O reset foi feito da seguinte forma:

```css
* {
  margin: 0;
  padding: 0;
  border: none;
  text-decoration: none;
  box-sizing: border-box;
}
```