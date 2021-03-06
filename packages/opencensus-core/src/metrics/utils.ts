/**
 * Copyright 2018, OpenCensus Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {LabelValue} from './export/types';

const COMMA_SEPARATOR = ',';
const UNSET_LABEL_VALUE: LabelValue = {
  value: null
};

/**
 * Returns a string(comma separated) from the list of label values.
 *
 * @param  {LabelValue[]} labelValues The list of the label values.
 * @returns {string} The hashed label values string.
 */
export function hashLabelValues(labelValues: LabelValue[]): string {
  return labelValues.map(lv => lv.value).sort().join(COMMA_SEPARATOR);
}

/**
 * Returns default label values.
 *
 * @param  {number} count The number of label values.
 * @returns {LabelValue[]} The list of the label values.
 */
export function initializeDefaultLabels(count: number): LabelValue[] {
  return new Array(count).fill(UNSET_LABEL_VALUE);
}
