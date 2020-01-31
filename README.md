# FSD
Tasks related to Full Stack Developer

## [ROAD MAP](https://github.com/kamranahmedse/developer-roadmap)

JANUARY 6, 2020<br>
FRONT END<br>
  HTML<br>
    Learn the basics : I already did in my [repository](https://github.com/Nehasingh1300/Web-Developmnent/tree/html)<br>
    <br>Forms and validation <br>
    Conventions and Best Practices :<br> 
        Use Correct Document Type<br>
            Always declare the document type as the first line in your document:<br>
            <!DOCTYPE html><br>
        Use Lower Case Element Names<br>
            HTML5 allows mixing uppercase and lowercase letters in element names.
            We recommend using lowercase element names because:
            Mixing uppercase and lowercase names is bad
            Developers normally use lowercase names (as in XHTML)
            Lowercase look cleaner
            Lowercase are easier to write
            Bad:
            <SECTION>
              <p>This is a paragraph.</p>
            </SECTION>
            Very Bad:
            <Section>
              <p>This is a paragraph.</p>
            </SECTION>
            Good:
            <section>
              <p>This is a paragraph.</p>
            </section>
        Close All HTML Elements<br>
            In HTML5, you don't have to close all elements (for example the <p> element).
            We recommend closing all HTML elements.
            Bad:
            <section>
              <p>This is a paragraph.
              <p>This is a paragraph.
            </section>
            Good:
            <section>
              <p>This is a paragraph.</p>
              <p>This is a paragraph.</p>
            </section>
        Close Empty HTML Elements<br>
            In HTML5, it is optional to close empty elements.
          Allowed:
            <meta charset="utf-8">
            Also Allowed:
            <meta charset="utf-8" />
            However, the closing slash (/) is REQUIRED in XHTML and XML.

 If you expect XML software to access your page, it is a good idea to keep the closing slash!

Use Lower Case Attribute Names
            HTML5 allows mixing uppercase and lowercase letters in attribute names.

We recommend using lowercase attribute names because:

            Mixing uppercase and lowercase names is bad
            Developers normally use lowercase names (as in XHTML)
            Lowercase look cleaner
            Lowercase are easier to write
            Bad:
            <div CLASS="menu">
            Good:
            <div class="menu">

    Quote Attribute Values
          HTML5 allows attribute values without quotes.

          We recommend quoting attribute values because:

          Developers normally quote attribute values (as in XHTML)
          Quoted values are easier to read
          You MUST use quotes if the value contains spaces
          Very bad:
          This will not work, because the value contains spaces:

          <table class=table striped>
          Bad:
          <table class=striped>
          Good:
          <table class="striped">

    Image Attributes
          Always add the alt attribute to images. This attribute is important when the image for some reason cannot be displayed. Also, always define image width and height. It reduces flickering because the browser can reserve space for the image before loading.

          Bad:
          <img src="html5.gif">
          Good:
          <img src="html5.gif" alt="HTML5" style="width:128px;height:128px">
          Spaces and Equal Signs
          HTML5 allows spaces around equal signs. But space-less is easier to read and groups entities better together.

          Bad:
          <link rel = "stylesheet" href = "styles.css">
          Good:
          <link rel="stylesheet" href="styles.css">
    Avoid Long Code Lines
          When using an HTML editor, it is inconvenient to scroll right and left to read the HTML code.

          Try to avoid code lines longer than 80 characters.

          Blank Lines and Indentation
          Do not add blank lines without a reason.

          For readability, add blank lines to separate large or logical code blocks.

          For readability, add two spaces of indentation. Do not use the tab key.

          Do not use unnecessary blank lines and indentation. It is not necessary to indent every element:

          Unnecessary:
          <body>

            <h1>Famous Cities</h1>

            <h2>Tokyo</h2>

            <p>
              Tokyo is the capital of Japan, the center of the Greater Tokyo Area,
              and the most populous metropolitan area in the world.
              It is the seat of the Japanese government and the Imperial Palace,
              and the home of the Japanese Imperial Family.
            </p>

          </body>
          Better:
          <body>

          <h1>Famous Cities</h1>

          <h2>Tokyo</h2>
          <p>Tokyo is the capital of Japan, the center of the Greater Tokyo Area,
          and the most populous metropolitan area in the world.
          It is the seat of the Japanese government and the Imperial Palace,
          and the home of the Japanese Imperial Family.</p>

          </body>
          
          

