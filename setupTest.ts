import "@testing-library/jest-dom/vitest";

import { expect } from "vitest";
import * as matchers from "vitest-axe/matchers";

expect.extend(matchers);
