/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║              PORTFOLIO ARTICLES DATA                        ║
 * ╠══════════════════════════════════════════════════════════════╣
 * ║  To add a new article:                                       ║
 * ║    1. Copy the template at the bottom of this file          ║
 * ║    2. Paste it at the TOP of the ARTICLES array (newest 1st) ║
 * ║    3. Fill in all fields and write your HTML content         ║
 * ║    4. Save — it will appear automatically on the site        ║
 * ║                                                              ║
 * ║  CATEGORIES (use exactly one):                               ║
 * ║    "Machine Learning" | "Data Engineering" | "Statistics"    ║
 * ║    "Visualization"    | "Career"           | "Tutorial"      ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

const ARTICLES = [
{
  slug: "formspree-html-setup",
  title: "How to Set Up Formspree in a Simple HTML Contact Form",
  date: "2026-04-15",
  category: "Web Development",
  tags: ["Formspree", "HTML", "Forms", "Email", "Beginner"],
  readTime: "6 min",
  summary:
    "Want your HTML contact form to send emails without a backend? Formspree makes it easy. Here’s a simple beginner-friendly guide to set it up in minutes.",
  content: `
    <p>If you're building a personal website or portfolio, chances are you'll want a contact form. The problem is: plain HTML forms don’t send emails by themselves.</p>

    <p>That’s where <strong>Formspree</strong> comes in. It lets you send form submissions straight to your email — without building a backend server.</p>

    <h2>Step 1: Create a Formspree account</h2>
    <p>Go to <strong>Formspree.io</strong> and create a free account. Once you log in, you can create a new form endpoint.</p>

    <p>Formspree will give you a special URL that looks like this:</p>

    <pre><code>https://formspree.io/f/abcdwxyz</code></pre>

    <p>This is the URL your form will send data to.</p>

    <h2>Step 2: Build your HTML form</h2>
    <p>Now create a simple contact form in your HTML file. The key part is the <code>action</code> attribute — it must point to your Formspree endpoint.</p>

    <pre><code>&lt;form action="https://formspree.io/f/abcdwxyz" method="POST"&gt;

  &lt;label&gt;Your Name&lt;/label&gt;
  &lt;input type="text" name="name" required /&gt;

  &lt;label&gt;Your Email&lt;/label&gt;
  &lt;input type="email" name="email" required /&gt;

  &lt;label&gt;Message&lt;/label&gt;
  &lt;textarea name="message" rows="5" required&gt;&lt;/textarea&gt;

  &lt;button type="submit"&gt;Send Message&lt;/button&gt;

&lt;/form&gt;
</code></pre>

    <p>Once the user clicks <strong>Send Message</strong>, the form data is posted to Formspree.</p>

    <h2>Step 3: Test the form</h2>
    <p>Open your website and submit the form once.</p>

    <p>Formspree will usually ask you to confirm your email the first time you receive a submission. After confirming, your form is officially active.</p>

    <h2>Step 4: Add a redirect (optional)</h2>
    <p>By default, Formspree will redirect the user to a simple success page. If you want to redirect them to your own page, add a hidden input called <code>_next</code>.</p>

    <pre><code>&lt;input type="hidden" name="_next" value="https://yourwebsite.com/thank-you.html" /&gt;
</code></pre>

    <p>This makes the experience feel more professional.</p>

    <h2>Step 5: Add a subject line (optional)</h2>
    <p>If you want your emails to have a nicer subject, you can include <code>_subject</code>.</p>

    <pre><code>&lt;input type="hidden" name="_subject" value="New Contact Form Message!" /&gt;
</code></pre>

    <h2>Step 6: Add spam protection</h2>
    <p>Spam can be a problem on public forms. A simple trick is to add a hidden "honeypot" field. Humans won’t fill it in, but bots often do.</p>

    <pre><code>&lt;input type="text" name="_gotcha" style="display:none" /&gt;
</code></pre>

    <p>If that field is filled, Formspree will ignore the submission.</p>

    <h2>A complete example</h2>
    <p>Here’s a clean version of a complete contact form using Formspree:</p>

    <pre><code>&lt;form action="https://formspree.io/f/abcdwxyz" method="POST"&gt;

  &lt;input type="hidden" name="_subject" value="New Portfolio Message!" /&gt;
  &lt;input type="hidden" name="_next" value="https://yourwebsite.com/thank-you.html" /&gt;
  &lt;input type="text" name="_gotcha" style="display:none" /&gt;

  &lt;label&gt;Name&lt;/label&gt;
  &lt;input type="text" name="name" required /&gt;

  &lt;label&gt;Email&lt;/label&gt;
  &lt;input type="email" name="email" required /&gt;

  &lt;label&gt;Message&lt;/label&gt;
  &lt;textarea name="message" rows="5" required&gt;&lt;/textarea&gt;

  &lt;button type="submit"&gt;Send&lt;/button&gt;

&lt;/form&gt;
</code></pre>

    <h2>Final thoughts</h2>
    <p>Formspree is one of the easiest ways to add email functionality to a static website. No backend, no server, no complicated setup.</p>

    <p>If you're building a portfolio, landing page, or personal site, Formspree is honestly a cheat code.</p>

    <p>Simple form. Clean HTML. Straight to your inbox.</p>
  `
},
  {
    slug: "ml-model-deployment",
    title: "From Jupyter Notebook to Production: A Practical Guide",
    date: "2024-11-20",
    category: "Machine Learning",
    tags: ["MLOps", "Docker", "FastAPI", "deployment"],
    readTime: "12 min",
    summary:
      "Most ML tutorials stop at model training. Here's what actually happens when you need to ship that model to production — including the parts nobody talks about.",
    content: `
      <p>The gap between a working Jupyter notebook and a production ML system is larger than most people expect. I've seen talented data scientists build impressive models that never made it to users simply because the path from "it works on my machine" to "it works for everyone" felt too daunting.</p>

      <p>This guide covers the practical steps I've found most effective, based on shipping models at scale.</p>

      <h2>Step 1: Package your model properly</h2>
      <p>Before you think about infrastructure, your model needs to be serializable, versioned, and environment-agnostic. I use a combination of <code>pickle</code> for simple models and <code>ONNX</code> for anything complex enough to need cross-framework compatibility.</p>

      <pre><code>import pickle
from sklearn.pipeline import Pipeline

# Always save the full pipeline, not just the model
with open("model_v1.pkl", "wb") as f:
    pickle.dump(pipeline, f)
</code></pre>

      <h2>Step 2: Build a minimal FastAPI wrapper</h2>
      <p>REST APIs are the lingua franca of production services. FastAPI gives you type validation, auto-generated docs, and async support with minimal boilerplate.</p>

      <pre><code>from fastapi import FastAPI
from pydantic import BaseModel
import pickle

app = FastAPI()
model = pickle.load(open("model_v1.pkl", "rb"))

class PredictRequest(BaseModel):
    features: list[float]

@app.post("/predict")
def predict(req: PredictRequest):
    prediction = model.predict([req.features])
    return {"prediction": prediction[0]}
</code></pre>

      <h2>Step 3: Containerize with Docker</h2>
      <p>Docker eliminates the "works on my machine" problem entirely. Your Dockerfile should be minimal — every unnecessary layer adds startup time.</p>

      <pre><code>FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
</code></pre>

      <h2>What nobody tells you</h2>
      <p>The real challenges aren't technical — they're operational. Logging predictions for drift detection, handling model rollbacks, maintaining feature parity between training and serving pipelines. These deserve their own articles.</p>

      <p>Start simple, ship it, then iterate. A deployed 80% model beats a perfect model sitting on your laptop every time.</p>
    `
  },
  {
    slug: "bayesian-ab-testing",
    title: "Why I Switched to Bayesian A/B Testing",
    date: "2024-09-10",
    category: "Statistics",
    tags: ["Bayesian", "A/B testing", "PyMC", "experimentation"],
    readTime: "8 min",
    summary:
      "Frequentist A/B testing is intuitive but has real pitfalls. Here's why Bayesian methods have become my default for product experiments — and how to get started.",
    content: `
      <p>For years I ran A/B tests the standard way: set a sample size, wait for significance, ship the winner. It worked fine. Then I started noticing the cracks.</p>

      <h2>The problem with p-values</h2>
      <p>The frequentist framework answers the question: "If the null hypothesis were true, how surprising would this data be?" That's not actually what anyone wants to know. Product managers want to know: "What's the probability that variant B is actually better?"</p>

      <p>Bayesian A/B testing answers that question directly.</p>

      <h2>A simple Bayesian framework</h2>
      <p>For conversion rate experiments, I model click rates as Beta-distributed and update beliefs as data comes in. The math is elegant:</p>

      <pre><code>import numpy as np

def bayesian_ab_test(control_conversions, control_total,
                      treatment_conversions, treatment_total,
                      n_samples=100_000):
    # Sample from posterior distributions
    control = np.random.beta(
        1 + control_conversions,
        1 + control_total - control_conversions,
        n_samples
    )
    treatment = np.random.beta(
        1 + treatment_conversions,
        1 + treatment_total - treatment_conversions,
        n_samples
    )

    prob_better = (treatment > control).mean()
    expected_lift = ((treatment - control) / control).mean()

    return prob_better, expected_lift

# Example
prob, lift = bayesian_ab_test(245, 1000, 289, 1000)
print(f"P(B > A) = {prob:.1%}, Expected lift = {lift:.1%}")
</code></pre>

      <h2>When to stop</h2>
      <p>This is where Bayesian methods truly shine. Instead of waiting for a predetermined sample size, you can stop when the probability of being wrong is acceptably low — or when the expected loss from choosing wrong is below your threshold.</p>

      <p>I typically ship when P(treatment > control) > 95% and the lower bound of the credible interval shows at least a 1% lift. This is a business decision encoded explicitly, not hidden in statistical convention.</p>
    `
  },

  {
    slug: "data-viz-principles",
    title: "The 5 Data Visualization Mistakes I See Every Week",
    date: "2024-07-22",
    category: "Visualization",
    tags: ["dataviz", "matplotlib", "storytelling", "design"],
    readTime: "6 min",
    summary:
      "Good charts are harder to make than they look. After reviewing hundreds of dashboards and reports, I keep seeing the same avoidable mistakes.",
    content: `
      <p>I review a lot of data work. The analysis is usually solid; the charts often aren't. Here are the patterns I see most frequently — and how to fix them.</p>

      <h2>1. Dual axes that distort relationships</h2>
      <p>Two y-axes with different scales can make any two unrelated series look correlated. If you need a secondary axis, make sure the relationship is genuinely meaningful and the scales are explicitly labeled.</p>

      <h2>2. 3D charts</h2>
      <p>There is no chart type where 3D adds clarity. 3D pie charts, 3D bar charts, and 3D surface plots all introduce perspective distortion that makes accurate comparison impossible. Use 2D.</p>

      <h2>3. Rainbow color scales for continuous data</h2>
      <p>Jet colormap is perceptually non-linear — the same data delta looks different in different parts of the range. Use perceptually uniform colormaps like <code>viridis</code>, <code>plasma</code>, or <code>cividis</code>.</p>

      <pre><code>import matplotlib.pyplot as plt
import numpy as np

data = np.random.rand(10, 10)

# Bad
plt.imshow(data, cmap='jet')

# Good
plt.imshow(data, cmap='viridis')
</code></pre>

      <h2>4. Chartjunk that obscures the story</h2>
      <p>Gridlines, legends, axis labels, and annotations should serve the story, not decorate the slide. Ask: "what would be lost if I removed this element?" If the answer is "nothing," remove it.</p>

      <h2>5. Not labeling the most important thing</h2>
      <p>If one bar is the key insight, label it directly. Don't make your audience read a legend, find the right color, trace it to the correct bar, and remember the scale. Direct labeling reduces cognitive load and makes your point immediately obvious.</p>

      <p>Data visualization is ultimately communication. Every design choice should serve the message, not the chart.</p>
    `
  }
];

/* ─────────────────────────────────────────────────────────
   ARTICLE TEMPLATE — copy this to add a new article
─────────────────────────────────────────────────────────
{
  slug: "my-article-slug",          // URL-friendly, no spaces
  title: "Your Article Title",
  date: "2025-01-15",               // YYYY-MM-DD
  category: "Machine Learning",     // See categories above
  tags: ["tag1", "tag2", "tag3"],
  readTime: "5 min",
  summary: "One or two sentence preview shown on the listing page.",
  content: `
    <p>Your article content in HTML...</p>
    <h2>Section Heading</h2>
    <p>More content...</p>
    <pre><code>// Code example
your_code_here()</code></pre>
  `
},
───────────────────────────────────────────────────────── */
