/*
 * alerts.js
 * Copyright (C) 2021 ernest <ernest@solay-pc>
 *
 * Distributed under terms of the MIT license.
 */

import Swal, {
  type SweetAlertOptions,
  type SweetAlertResult,
} from 'sweetalert2'

const styleOptions: SweetAlertOptions = {
  confirmButtonColor: '#055B1D',
  cancelButtonColor: '#6b7280',
}

export function confirm(
  options: SweetAlertOptions,
): Promise<SweetAlertResult<any>> {
  return Swal.fire({
    icon: 'warning',
    showCancelButton: true,
    ...styleOptions,
    ...options,
  } as SweetAlertOptions)
}
